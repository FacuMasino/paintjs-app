"use client";
import { MOUSE_LEFT_BUTTON, MOUSE_RIGHT_BUTTON } from "@/consts";
import { usePaintContext } from "@/contexts/PaintContext";
import { useState } from "react";

export default function Pixel({ defaultColor }: { defaultColor: string }) {
  const [isPainted, setIsPainted] = useState(false);
  const paintContext = usePaintContext();
  const [pixelColor, setPixelColor] = useState<string>(
    paintContext.currentColor
  );

  const handlePaint = (e: React.MouseEvent) => {
    if (e.buttons === MOUSE_RIGHT_BUTTON) return;
    if (pixelColor != paintContext.currentColor) {
      setPixelColor(paintContext.currentColor);
    }
    setIsPainted(!isPainted);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === MOUSE_LEFT_BUTTON) handlePaint(e);
  };

  return (
    <button
      role="gridcell"
      aria-label={`Pixel de la grilla ${isPainted ? "pintado" : "sin pintar"}`}
      onMouseDown={handlePaint}
      onMouseOver={handleMouseMove}
      className="border border-black transition-colors duration-150"
      style={{ backgroundColor: isPainted ? pixelColor : defaultColor }}
    />
  );
}
