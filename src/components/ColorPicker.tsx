"use client";

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
        className="absolute flex gap-1 bg-white p-1 border-2 border-black drop-shadow-lg"
        style={{ top: coordinates.y, left: coordinates.x }}
        onMouseLeave={handleClose}
      >
        {paintContext.availableColors.map((color) => (
          <button
            onClick={() => handleColorPick({ color })}
            key={color}
            className="h-5 w-5"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    )
  );
}
