"use client";
import { usePaintContext } from "@/contexts/PaintContext";
import { useState } from "react";

export default function Pixel({ defaultColor }: { defaultColor: string }) {
  const [isPainted, setIsPainted] = useState(false);
  const paintContext = usePaintContext();
  const [pixelColor, setPixelColor] = useState<string>(
    paintContext.currentColor
  );

  const handlePaint = () => {
    if (pixelColor != paintContext.currentColor) {
      setPixelColor(paintContext.currentColor);
    }
    setIsPainted((prev) => !prev);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) handlePaint();
  };

  return (
    <button
      onClick={handlePaint}
      onMouseOver={handleMouseMove}
      className="border border-black"
      style={{ backgroundColor: isPainted ? pixelColor : defaultColor }}
    />
  );
}
