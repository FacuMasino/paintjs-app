"use client";

import { useEffect, useState } from "react";

type Coordinates = {
  x: number;
  y: number;
};

export default function ColorPicker() {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const handleColorPicker = (e: MouseEvent) => {
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

  useEffect(() => {
    document.addEventListener("contextmenu", handleColorPicker);
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("contextmenu", handleColorPicker);
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    isOpen && (
      <div
        className="flex absolute"
        style={{ top: coordinates.y, left: coordinates.x }}
      >
        <button className="h-5 w-5 bg-red-500" />
        <button className="h-5 w-5 bg-blue-500" />
        <button className="h-5 w-5 bg-green-500" />
      </div>
    )
  );
}
