import React, { useState } from "react";
import "./styles.css";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { setAuth } = useAuth();
  const [username, setUsername] = useState();
  const navigate = useNavigate();

  function handleLogin() {
    setAuth({ username: username });
    navigate("/quiz");
  }

  return (
    <>
      <div className="container">
        <h1>Nome</h1>
        <input
          type="text"
          placeholder="Insira seu nome..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          acessar
        </button>
      </div>
    </>
  );
}
