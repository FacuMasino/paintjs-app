"use client";

import { useEffect, useState } from "react";
import Pixel from "./Pixel";

type WindowSize = {
  width: number;
  height: number;
};

export default function Canvas() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const pixelSize = Math.floor(windowSize.width / 100);
  const totalPixels = Math.floor(windowSize.height / pixelSize) * 100;

  const pixelsArray =
    totalPixels > 0 ? Array(totalPixels).fill("transparent") : [];

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <>
      <div
        className="grid border border-black"
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
