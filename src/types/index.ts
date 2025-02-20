import { Dispatch, SetStateAction } from "react";

export type PaintContextType = {
  /** Currently selected color for painting */
  currentColor: string;
  /** Colors available to use */
  availableColors: string[];
  /** Updates the selected color for painting */
  setCurrentColor: Dispatch<SetStateAction<string>>;
  /** Updates the available colors in the color picker*/
  setAvailableColors: Dispatch<SetStateAction<string[]>>;
};

export type WindowSize = {
  /** Inner width of the browser window */
  width: number;
  /** Inner height of the browser window */
  height: number;
};

export type Coordinates = {
  /** clientX Mouse Position */
  x: number;
  /** clientY Mouse position */
  y: number;
};
