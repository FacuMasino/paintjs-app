"use client";

export default function Pixel({ defaultColor }: { defaultColor: string }) {
  return (
    <div
      className="border border-black"
      style={{ backgroundColor: defaultColor }}
    ></div>
  );
}
