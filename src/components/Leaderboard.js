import { Link } from 'react-router-dom';

function Leaderboard() {
  return (
    <div className="App">
      <p>Home Page</p>
      <p>Go to <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Leaderboard;