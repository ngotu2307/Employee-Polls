import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import ErrorPage from './components/ErrorPage'
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import PollPage from './components/PollPage';
import NewPollPage from './components/NewPollPage';
import Register from './components/auth/Register';
import { useSelector } from 'react-redux';
import MainNavigation from './components/MainNavigation';

function App() {

  const isAuth = useSelector(state => state.auth.isAuthen);
  console.log("isAuth: ", isAuth);
  return (
    <>
    { isAuth && <MainNavigation /> }
    <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/dashboard" /> : <Navigate to="/login" /> } />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={isAuth ? <Dashboard /> : <Navigate to="/login" /> } />
        <Route path='leaderboard' element={isAuth ? <Leaderboard /> : <Navigate to="/login" /> } />
        <Route path='newpoll' element={isAuth ? <NewPollPage /> : <Navigate to="/login" /> } />
        <Route path='poll/:id' element={isAuth ? <PollPage /> : <Navigate to="/login" /> } />
    </Routes>
    </>
  )
}

export default App;
