import { createContext, useContext } from "react";

type AuthCtx = {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
};

export const Ctx = createContext<AuthCtx>({
  accessToken: null,
  setAccessToken: () => {},
});

export const useAuth = () => useContext(Ctx);
