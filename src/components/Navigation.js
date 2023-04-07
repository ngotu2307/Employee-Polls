import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

const Navigation = (props) => {
  const navigate = useNavigate();
  const { dispatch } = props;

  const handleClickLogout = (e) => {
    console.log('Logout!');
    e.preventDefault();
    dispatch(setAuthedUser(null));
    navigate("/");
  }

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/newpoll">New</Link>
        </li>
        <li>
          {props.authedUser}
        </li>
        <li>
          <Link onClick={handleClickLogout}>Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
})

export default connect(mapStateToProps)(Navigation);