import { Link } from 'react-router-dom';

function Register() {
    return (
      <div className="App">
        <p>
        Register Page
        </p>
        <p>Go to <Link to="/dashboard">Dashboard</Link></p>
      </div>
    );
  }
  
  export default Register;