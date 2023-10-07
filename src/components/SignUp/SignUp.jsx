import React, { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      <h1>signup</h1>
      <div>
        <h2>username</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <h2>passwrod</h2>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>{" "}
      <div>
        <h2>confirmPassword</h2>
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <div>username: {username}</div>
        <div>password: {password}</div>
        <div>confirmPassword: {confirmPassword}</div>
      </div>
    </div>
  );
};

export default SignUpPage;
