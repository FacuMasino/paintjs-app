"use client";

import Canvas from "@/components/Canvas";
import PaintContextProvider from "@/contexts/PaintContext";

export default function App() {
  return (
    <PaintContextProvider initialColor="red" availableColors={[""]}>
      <div className="flex items-center justify-center w-screen h-screen">
        <Canvas />
      </div>
    </PaintContextProvider>
  );
}
