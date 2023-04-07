import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginImages from '../../res/LoginImages';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

const Login = (props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] =  useState("");
  const [username, setUsername] =  useState("");
  const [password, setPassword] =  useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    
    if (username === "") {
      setErrorMessage("Please enter username");
      return;
    }

    if (password === "") {
      setErrorMessage("Please enter password");
      return;
    }
    setErrorMessage("");

    const userIds = Object.keys(props.users);
    const foundId = userIds.find(userId => userId === username);
    
    if(foundId !== undefined) {
      const foundUser = props.users[foundId];
      console.log("user found: ", foundUser);
      if(foundUser.password === password) {
        console.log("Login successfully!");
        dispatch(setAuthedUser(username));
        navigate("/dashboard");
        return;
      }
    }
    
    setErrorMessage("Wrong credential. Please try again.");
    return;
  }

  return (
    <div>
      <h2>Employee Polls</h2>
      <img src={LoginImages.logo} />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p className='text-danger'>{errorMessage}</p>
    </div>
  );
}

const mapStateToProps = ({ users, authedUser }, prop) => {
  return {
    authedUser,
    users
  }
};

export default connect(mapStateToProps)(Login);