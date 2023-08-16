"use client";

import { createContext, useContext, useState } from "react";

export type Token = string | undefined;

const TokenContext = createContext<
  [Token, React.Dispatch<React.SetStateAction<Token>>] | undefined
>(undefined);

export function TokenProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<Token>(undefined);
  return (
    <TokenContext.Provider value={[token, setToken]}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("useToken must be used within a TokenContext");
  }
  return context;
}
