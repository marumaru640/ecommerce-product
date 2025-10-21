import { useEffect, useState } from "react";
import { api } from "../../hooks/useAuth";
import "./MainLayout.css";

export default function MainLayout() {
  const [status, setStatus] = useState("Checking...");
  useEffect(() => {
    async function fetchData() {
      await api.get("/api/health");
      setStatus("Backend is healthy");
    }
    fetchData();
  }, []);

  return <main className="MainLayout">{status}</main>;
}
