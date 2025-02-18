"use client";

import { useEffect, useState } from "react";
import Pixel from "./Pixel";
import ColorPicker from "./ColorPicker";
import { TOTAL_PIXELS } from "@/consts";

type WindowSize = {
  width: number;
  height: number;
};

export default function Canvas() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const pixelSize = Math.floor(windowSize.width / TOTAL_PIXELS);
  const totalPixels = Math.floor(windowSize.height / pixelSize) * TOTAL_PIXELS;

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
      <ColorPicker />
      <div
        className="grid border border-black"
        style={{
          gridTemplateColumns: `repeat(${TOTAL_PIXELS}, ${pixelSize}px)`,
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
