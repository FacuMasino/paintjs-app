"use client";

import { useState } from "react";

export default function Pixel({ defaultColor }: { defaultColor: string }) {
  const [isPainted, setIsPainted] = useState(false);

  const handlePaint = () => {
    setIsPainted((prev) => !prev);
  };

  return (
    <button
      onClick={handlePaint}
      className="border border-black"
      style={{ backgroundColor: isPainted ? "black" : defaultColor }}
    />
  );
}
