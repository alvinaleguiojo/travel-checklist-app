// MyContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface MyContextType {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
