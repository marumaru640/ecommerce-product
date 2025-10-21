import { createContext, useContext, useState } from "react";

type AuthCtx = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

const Ctx = createContext<AuthCtx>({
  accessToken: null,
  setAccessToken: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  return <Ctx.Provider value={{ accessToken, setAccessToken }}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
