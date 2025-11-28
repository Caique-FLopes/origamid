import React from "react";

interface IUiContext {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (context === null) throw new Error("Use dentro do provider");
  return context;
};

const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <UiContext.Provider value={{ dark, setDark }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
