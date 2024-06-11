import { createContext } from "react";

export const SomeContext = createContext({
  value: "light",
  toggleValue: () => {},
});
