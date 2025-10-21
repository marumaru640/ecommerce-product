import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { api } from "../../config/api";

export default function SignUpComponent() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {
      await api.post("/api/members", {
        name,
        email,
        password,
      });
      alert("Sign up successful");
      navigate("/login", { replace: true });
    } catch (error) {
      alert("Sign up failed");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <div>
        <p className="toggle-text">
          Already have an account?
          <Link to="/login" className="toggle-link">
            {" "}
            Log In
          </Link>
        </p>
      </div>
    </>
  );
}
