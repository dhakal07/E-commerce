// src/components/LoginForm.js

import React from 'react';

function LoginForm() {
  return (
    <div className="auth-box">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
