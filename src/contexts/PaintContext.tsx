import { PaintContextType } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

const PaintContext = createContext<PaintContextType | undefined>(undefined);

type PaintContextProviderProps = {
  children: ReactNode;
  /** Initial color selected for painting */
  initialColor: string;
  /** Available colors that will be shown in the color picker */
  availableColors: string[];
};

export default function PaintContextProvider({
  children,
  initialColor,
  availableColors: colors,
}: PaintContextProviderProps) {
  const [currentColor, setCurrentColor] = useState<string>(initialColor);
  const [availableColors, setAvailableColors] = useState<string[]>(colors);

  return (
    <PaintContext.Provider
      value={{
        currentColor,
        availableColors,
        setCurrentColor,
        setAvailableColors,
      }}
    >
      {children}
    </PaintContext.Provider>
  );
}

export const usePaintContext = () => {
  const context = useContext(PaintContext);
  if (context === undefined) {
    throw new Error(
      "usePaintContext must be used inside components wrapped by PaintContextProvider"
    );
  }
  return context;
};
