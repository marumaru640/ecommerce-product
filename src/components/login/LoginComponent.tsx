import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";

export default function LoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn((prevMode) => !prevMode);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const loginSuccessful = true;

    if (loginSuccessful) {
      navigate("/welcome");
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          {isLoggedIn ? "Login" : "Sign Up"}
        </label>

        <div className="username-container">
          <label htmlFor="username" className="username-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            name="username"
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

        {!isLoggedIn && (
          <div className="password-container">
            <label htmlFor="confirm-password" className="password-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
          </div>
        )}

        <div className="button-container">
          <button
            type="submit"
            className="signup-button"
            name="action"
            value="signup"
          >
            {isLoggedIn ? "Login" : "Sign Up"}
          </button>
        </div>
      </form>

      <div>
        <p className="toggle-text">
          {isLoggedIn ? "Don't have an account?" : "Already have an account?"}
          <a className="link-toggle" onClick={handleLogin}>
            {isLoggedIn ? "Sign Up" : "Login"}
          </a>
        </p>
      </div>
    </div>
  );
}
