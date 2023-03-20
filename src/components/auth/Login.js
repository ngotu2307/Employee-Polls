import { useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import LoginImages from '../../res/LoginImages';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    console.log("submit: username: " + username + ", password: " + password);
    dispatch(authActions.login());

    localStorage.setItem("session", username);

    event.preventDefault();
    navigate('/dashboard');
  }

  const navigateToDashboard = () => {
    // when session available => dispatch login action to using isAuthen state update UI
    dispatch(authActions.login());
    navigate('/dashboard');
  }

  const isSessionAvailable = localStorage.getItem('session');
  console.log("isSessionAvailable: " + isSessionAvailable );

  return (
    <div>
      {isSessionAvailable == null ? (
        <div>
          <h2>Employee Polls</h2>
          <Image src={LoginImages.logo} rounded />
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>) : navigateToDashboard()
    }
    </div>
  );
}

export default Login;