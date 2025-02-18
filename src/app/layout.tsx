import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PaintJS - Test frontend Carestino",
  description: "Test frontend Carestino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
