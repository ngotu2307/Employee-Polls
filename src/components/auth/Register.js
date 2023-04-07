import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginImages from '../../res/LoginImages';

function Login() {

  const handleSubmit = () => {

  }

  const setUserName = () => {

  }

  const setPassword = () => {

  }

  return (
    <div>
      <h2>Employee Polls</h2>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <p></p>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;