import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

const Navigation = ({ dispatch, user, authedUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location: ", location.pathname);

  const handleClickLogout = (e) => {
    console.log('Logout!');
    e.preventDefault();
    dispatch(setAuthedUser(null));
    navigate("/");
  }

  console.log("user: ", user);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mt-1'>
        <ul className='list-group list-group-horizontal'>
          <li className="list-group-item border-0">
            <Link style={{textDecoration: location.pathname==="/dashboard" ? "underline" : "none"}} to="/">Home</Link>
          </li>
          <li className="list-group-item border-0">
            <Link style={{textDecoration: location.pathname==="/leaderboard" ? "underline" : 'none'}} to="/leaderboard">Leaderboard</Link>
          </li>
          <li className="list-group-item border-0">
            <Link style={{textDecoration: location.pathname==="/newpoll" ? "underline" : 'none'}} to="/newpoll">New</Link>
          </li>
        </ul>
        <ul className='list-group list-group-horizontal'>
          <li className="list-group-item border-0">
            <div className='d-flex justify-content-end'>
              {/*need to check user !== undefined in case of refresh browser*/}
              <img width="10%" src={user !== undefined ? user.avatarURL : undefined} className='rounded-circle' alt="Profile" />
              <span data-testid="authedUser-text" className='ms-2 fw-bold'>{authedUser}</span>
            </div>
          </li>
          <li className="list-group-item border-0">
            <Link style={{textDecoration: 'none'}} onClick={handleClickLogout}>Logout</Link>
          </li>
        </ul>
      </div>

      <div className="border-top mb-3 mt-1"></div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users }) => {
  const userIds = Object.keys(users);
  const authenUserId = userIds.find(userId => userId === authedUser);
  return ({
    user: users[authenUserId],
    authedUser
  })
}

export default connect(mapStateToProps)(Navigation);