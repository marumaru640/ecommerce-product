import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../config/api";

export default function WelcomeComponent() {
  const nav = useNavigate();
  const { setAccessToken } = useAuth();

  async function handleLogout() {
    try {
      await api.post("/api/auth/logout");
    } catch (e) {
      console.log(e);
    }
    setAccessToken(null);
    nav("/login", { replace: true });
  }
  return (
    <div className="Welcome">
      Welcome Component
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
