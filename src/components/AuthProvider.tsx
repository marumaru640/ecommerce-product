import { useState } from "react";
import { Ctx } from "../hooks/useAuth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  return <Ctx.Provider value={{ accessToken, setAccessToken }}>{children}</Ctx.Provider>;
}
