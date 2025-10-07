import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prosta walidacja pól
    if (!username || !password) {
      setMessage("Uzupełnij wszystkie pola!");
      return;
    }

    // Symulacja logowania
    if (username === "admin" && password === "1234") {
      setMessage("✅ Zalogowano pomyślnie!");
    } else {
      setMessage("❌ Błędna nazwa użytkownika lub hasło.");
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <h2>Formularz logowania</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input
          id="username"
          type="text"
          placeholder="Wpisz login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <label htmlFor="password">Hasło:</label>
        <input
          id="password"
          type="password"
          placeholder="Wpisz hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <div style={styles.buttons}>
          <button id="login-button" type="submit" style={styles.button}>
            Zaloguj
          </button>
          <button type="button" onClick={handleReset} style={styles.resetButton}>
            Resetuj
          </button>
        </div>
      </form>
      {message && <p id="message" style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    width: "320px",
    margin: "80px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #aaa",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  resetButton: {
    padding: "8px 16px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    fontWeight: "bold",
  },
};

export default LoginForm;
