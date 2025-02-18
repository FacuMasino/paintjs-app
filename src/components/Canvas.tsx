"use client";

import Pixel from "./Pixel";

export default function Canvas() {
  const pixelSize = Math.floor(window.innerWidth / 100);
  const totalPixels = Math.floor(window.innerHeight / pixelSize) * 100;

  const pixelsArray = Array(totalPixels).fill("transparent");

  return (
    <>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(100, ${pixelSize}px)`,
          gridAutoRows: `${pixelSize}px`,
        }}
      >
        {pixelsArray.map((color, index) => (
          <Pixel key={index} defaultColor={color} />
        ))}
      </div>
    </>
  );
}
