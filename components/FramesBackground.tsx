import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export const FramesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll();

  const totalFrames = 96;

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;
      
      const index = i - 1;
      
      img.onload = () => {
        loadedImages[index] = img;
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages([...loadedImages]);
          // Initial draw
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            const img = loadedImages[0];
            if (ctx && img) {
              const canvasRatio = canvasRef.current.width / canvasRef.current.height;
              const imgRatio = img.width / img.height;
              
              let drawWidth = img.width;
              let drawHeight = img.height;
              let offsetX = 0;
              let offsetY = 0;
              
              if (imgRatio > canvasRatio) {
                drawWidth = img.height * canvasRatio;
                offsetX = (img.width - drawWidth) / 2;
              } else {
                drawHeight = img.width / canvasRatio;
                offsetY = (img.height - drawHeight) / 2;
              }
              
              ctx.drawImage(
                img,
                offsetX, offsetY, drawWidth, drawHeight,
                0, 0, canvasRef.current.width, canvasRef.current.height
              );
            }
          }
        }
      };
    }
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (images.length === totalFrames && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      // Calculate which frame to show
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(latest * totalFrames)
      );
      
      const img = images[frameIndex];
      if (ctx && img) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Calculate crop to cover the whole canvas (object-fit: cover equivalent)
        const canvasRatio = canvasRef.current.width / canvasRef.current.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = img.width;
        let drawHeight = img.height;
        let offsetX = 0;
        let offsetY = 0;
        
        if (imgRatio > canvasRatio) {
          drawWidth = img.height * canvasRatio;
          offsetX = (img.width - drawWidth) / 2;
        } else {
          drawHeight = img.width / canvasRatio;
          offsetY = (img.height - drawHeight) / 2;
        }
        
        ctx.drawImage(
          img,
          offsetX, offsetY, drawWidth, drawHeight,
          0, 0, canvasRef.current.width, canvasRef.current.height
        );
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a redraw
        const latest = scrollYProgress.get();
        if (images.length > 0) {
          const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * totalFrames)
          );
          const img = images[frameIndex];
          const ctx = canvasRef.current.getContext('2d');
          if (ctx && img) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            const canvasRatio = canvasRef.current.width / canvasRef.current.height;
            const imgRatio = img.width / img.height;
            
            let drawWidth = img.width;
            let drawHeight = img.height;
            let offsetX = 0;
            let offsetY = 0;
            
            if (imgRatio > canvasRatio) {
              drawWidth = img.height * canvasRatio;
              offsetX = (img.width - drawWidth) / 2;
            } else {
              drawHeight = img.width / canvasRatio;
              offsetY = (img.height - drawHeight) / 2;
            }
            
            ctx.drawImage(
              img,
              offsetX, offsetY, drawWidth, drawHeight,
              0, 0, canvasRef.current.width, canvasRef.current.height
            );
          }
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover"
      />
      {/* Optional dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};
