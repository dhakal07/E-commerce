// src/components/RegisterForm.js

import React from 'react';

function RegisterForm() {
  return (
    <div className="auth-box">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
