import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import images from '../../res/images';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

const Login = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const locationState = location.state;

  const setTempUser = (tUsername) => {
    setErrorMessage("");
    if (tUsername === "") {
      setErrorMessage("Please enter username");
    }
    setUsername(tUsername);
  }

  const setTempPassword = (tPassword) => {
    setErrorMessage("");
    if (tPassword === "") {
      setErrorMessage("Please enter password");
    }
    setPassword(tPassword);
  }

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

    if (foundId !== undefined) {
      const foundUser = props.users[foundId];
      console.log("user found: ", foundUser);
      if (foundUser.password === password) {
        console.log("Login successfully!");
        dispatch(setAuthedUser(username));
        navigate(locationState !== null ? locationState.prevPath : "/dashboard");
        return;
      }
    }

    setErrorMessage("Wrong credential. Please try again.");
    return;
  }

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-sm-12 d-flex flex-column justify-content-center'>
          <h2 className='text-center'>Employee Polls</h2>
          <p />
          <div className="text-center">
            <img width="25%" className='rounded' src={images.logo} />
          </div>
          <p />
          <h3 className="text-center" data-testid="login-heading">Log in</h3>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column justify-content-center">
              <div className="form-group text-center">
                <label htmlFor="userInput">User</label>
                <input data-testid='username-input' type="text" className="form-control" id="userInput"  placeholder="User" onChange={e => setTempUser(e.target.value)} />
              </div>
              <br />
              <div className="form-group text-center">
                <label htmlFor="userPassword">Password</label>
                <input data-testid='password-input' type="password" className="form-control" id="userPassword"  placeholder="Password" onChange={e => setTempPassword(e.target.value)} />
              </div>
              <p />
              <div className='text-center'>
                <button data-testid="submit-button" type="submit" disabled={errorMessage !== ""} className={errorMessage === "" ? "btn btn-primary" : "btn btn-secondary" } >Submit</button>
              </div>
            </div>
          </form>
          <p data-testid="error-message" className='text-danger'>{errorMessage}</p>
        </div>
      </div>
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