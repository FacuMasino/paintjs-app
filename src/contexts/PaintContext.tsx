import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type PaintContextType = {
  currentColor: string;
  availableColors: string[];
  setCurrentColor: Dispatch<SetStateAction<string>>;
  setAvailableColors: Dispatch<SetStateAction<string[]>>;
};

type PaintContextProviderProps = {
  children: React.ReactNode;
  initialColor: string;
  availableColors: string[];
};

const PaintContext = createContext<PaintContextType | undefined>(undefined);

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
      "usePaintContext debería ser usado solo en componentes envueltos en un PaintContextProvider"
    );
  }
  return context;
};
