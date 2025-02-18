"use client";

import Canvas from "@/components/Canvas";
import { AVAILABLE_COLORS } from "@/consts";
import PaintContextProvider from "@/contexts/PaintContext";

export default function App() {
  return (
    <PaintContextProvider
      initialColor={AVAILABLE_COLORS[0]}
      availableColors={AVAILABLE_COLORS}
    >
      <div className="flex items-center justify-center w-screen h-screen">
        <Canvas />
      </div>
    </PaintContextProvider>
  );
}
