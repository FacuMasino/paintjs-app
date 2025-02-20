"use client";

import { useEffect, useState } from "react";
import Pixel from "./Pixel";
import ColorPicker from "./ColorPicker";
import { DEFAULT_BG_PIXEL, TOTAL_PIXELS } from "@/consts";
import { WindowSize } from "@/types";

export default function Canvas() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const pixelSize = Math.floor(windowSize.width / TOTAL_PIXELS);
  const totalPixels = Math.floor(windowSize.height / pixelSize) * TOTAL_PIXELS;

  const pixelsArray =
    totalPixels > 0 ? Array(totalPixels).fill(DEFAULT_BG_PIXEL) : [];

  // Browser window size is set inside a useEffect
  // because window API isn't available before component is mounted
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
        role="grid"
        aria-label="Área de dibujo"
        className="grid border border-black"
        style={{
          gridTemplateColumns: `repeat(${TOTAL_PIXELS}, ${pixelSize}px)`,
          gridAutoRows: `${pixelSize}px`,
        }}
      >
        {pixelsArray.map((color, index) => (
          // Using index as key isn't a good practice but is fine for this case,
          // because pixelsArray is not going to be rearranged or deleted
          <Pixel key={index} defaultColor={color} />
        ))}
      </div>
    </>
  );
}
