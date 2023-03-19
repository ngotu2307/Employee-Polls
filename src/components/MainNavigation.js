import { Link, NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                <li><NavLink to="/newpoll">New</NavLink></li>
            </ul>
        </nav>
    </header>
  );
}

export default MainNavigation;