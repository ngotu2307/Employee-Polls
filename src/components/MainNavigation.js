import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';

function MainNavigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    console.log("Logout successfully!");
    dispatch(authActions.logout());
    localStorage.clear();

    event.preventDefault();
    console.log("navigate to login");
    navigate('/login');
  }

  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                <li><NavLink to="/newpoll">New</NavLink></li>
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default MainNavigation;