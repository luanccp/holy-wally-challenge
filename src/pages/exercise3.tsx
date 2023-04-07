import React, { useCallback, useEffect, useState } from "react";

// in milliseconds
const USER_INACTIVE_TIMEOUT = 5000;

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = useCallback(() => {
    alert("Login submitted: " + username + ", " + password);
  }, [password, username]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      alert("Do you need help?");
    }, USER_INACTIVE_TIMEOUT);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="your-email@email.com"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
