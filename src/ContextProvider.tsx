import { createContext, useState } from "react";

export const Context = createContext({});

export default function ContextProvider({ children }: any) {
  const [contactVisible, setContactVisible] = useState(false);

  return <Context.Provider value={{
    contactVisible, setContactVisible
  } as any}>{children}</Context.Provider>
};