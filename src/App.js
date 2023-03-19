import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Login from './components/auth/Login';
import ErrorPage from './components/ErrorPage'
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import PollPage from './components/PollPage';
import NewPollPage from './components/NewPollPage';
import Register from './components/auth/Register';
import RootLayout from './components/root/Root';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "error", element: <ErrorPage /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "poll/:id", element: <PollPage /> },
      { path: "newpoll", element: <NewPollPage /> }
    ]
  },

  { path: "/login", element: <Login /> }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
