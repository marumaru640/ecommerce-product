import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { api } from "../../config/api";

export default function LoginComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAccessToken } = useAuth();
  const navigate = useNavigate();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await api.post("/api/auth/login", {
      email,
      password,
    });

    const { accessToken } = response.data as { accessToken: string };
    setAccessToken(accessToken);
    navigate("/welcome", { replace: true });
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <label className="login-label">Login</label>

        <div className="email-container">
          <label htmlFor="email" className="email-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="password-container">
          <label htmlFor="password" className="password-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            name="password"
          />
        </div>

        <div className="button-container">
          <button type="submit" className="signup-button" name="action" value="signup">
            Login
          </button>
        </div>
      </form>

      <div>
        <p className="toggle-text">
          Don't have an account?
          <Link to="/signup" className="toggle-link">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
