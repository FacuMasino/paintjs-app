"use client";
import { MOUSE_LEFT_BUTTON } from "@/consts";
import { usePaintContext } from "@/contexts/PaintContext";
import { useState } from "react";

export default function Pixel({ defaultColor }: { defaultColor: string }) {
  const paintContext = usePaintContext();
  const [pixelColor, setPixelColor] = useState<string>(defaultColor);

  const handleClick = () => {
    // If the pixel color isn't the default, the user is erasing
    if (pixelColor != defaultColor) {
      setPixelColor(defaultColor);
      return;
    }
    setPixelColor(paintContext.currentColor);
  };

  // Handles painting when user is dragging the mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    if (pixelColor === paintContext.currentColor) return;
    if (e.buttons === MOUSE_LEFT_BUTTON) {
      setPixelColor(paintContext.currentColor);
    }
  };

  return (
    <button
      role="gridcell"
      aria-label={`Pixel de la grilla ${
        pixelColor != defaultColor ? "pintado" : "sin pintar"
      }`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      className="border border-black transition-colors duration-150"
      style={{ backgroundColor: pixelColor }}
    />
  );
}
