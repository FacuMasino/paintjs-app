"use client";

import Pippete from "@/assets/Pippete";
import { usePaintContext } from "@/contexts/PaintContext";
import { useEffect, useState } from "react";

type Coordinates = {
  x: number;
  y: number;
};

export default function ColorPicker() {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const paintContext = usePaintContext();

  const handleOpen = (e: MouseEvent) => {
    e.preventDefault();
    setCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleColorPick = ({ color }: { color: string }) => {
    paintContext.setCurrentColor(color);
    handleClose();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleOpen);
    return () => {
      document.removeEventListener("contextmenu", handleOpen);
    };
  }, []);

  return (
    isOpen && (
      <div
        role="group"
        aria-label="Selector de color"
        className="absolute flex gap-1 bg-white p-1 border-2 -m-1 border-black rounded drop-shadow-lg"
        style={{ top: coordinates.y, left: coordinates.x }}
        onMouseLeave={handleClose}
      >
        {paintContext.availableColors.map((color) => (
          <button
            onClick={() => handleColorPick({ color })}
            key={color}
            className="h-7 w-7 rounded hover:scale-105 transition-transform"
            style={{ backgroundColor: color }}
          />
        ))}
        <button
          aria-label="Abre el selector de color pesonalizado"
          className="h-7 w-7 flex items-center rounded border-2 border-black hover:scale-105 transition-transform"
        >
          <Pippete className="w-6 h-6" />
          <input
            type="color"
            aria-label="Selector de color personalizado"
            className="absolute w-7 h-7 opacity-0"
            defaultValue={paintContext.currentColor}
            onMouseLeave={(e) => {
              if (e.currentTarget.value != paintContext.currentColor)
                handleColorPick({ color: e.currentTarget.value });
            }}
          />
        </button>
      </div>
    )
  );
}
