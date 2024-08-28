import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [did, setDid] = useState("");
  const [credential, setCredential] = useState(null);
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        username,
      });
      setDid(response.data.did);
      setCredential(response.data.issuedCredential);
      setMessage("Registration successful");
    } catch (error) {
      console.error(error);
      setMessage("Registration failed");
    }
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        credential,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Login failed");
    }
  };

  return (
    <div className="App">
      <h1>Atala PRISM Authentication Demo</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={register}>Register</button>
      <button onClick={login} disabled={!credential}>
        Login
      </button>
      <p>{message}</p>
    </div>
  );
}

export default App;
