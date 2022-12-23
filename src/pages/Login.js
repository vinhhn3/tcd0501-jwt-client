import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = async (e) => {
    e.preventDefault();

    const result = await axios.post("http://localhost:4001/auth/login", {
      email,
      password,
    });
    console.log(result.data.token);
    localStorage.setItem("x-access-token", result.data.token);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={onChangePassword} />
        </div>
        <div>
          <button type="submit" onClick={onLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
