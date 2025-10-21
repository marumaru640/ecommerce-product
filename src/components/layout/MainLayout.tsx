import { useEffect, useState } from "react";
import "./MainLayout.css";
import { api } from "../../config/api";

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
