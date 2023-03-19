import { Link } from 'react-router-dom';

function Login() {
    return (
      <div className="App">
        <p>
          Login Page
        </p>
        <p>Go to <Link to="/dashboard">Dashboard</Link></p>
      </div>
    );
  }
  
  export default Login;