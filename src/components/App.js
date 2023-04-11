import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./dashboard/Dashboard";
import PollPage from "./PollPage";
import NewPollPage from "./NewPollPage";
import Leaderboard from "./leaderboard/Leaderboard";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import { Navigate } from "react-router-dom";
import NotFound from "./NotFound";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <Routes>
        <Route path="/" exact element={props.showLogin ? 	<Navigate to="/login" /> : <Navigate to="/dashboard" />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/question/:id" element={<PollPage />} />
        <Route path="/newpoll" exact element={<NewPollPage />} />
        <Route path="/leaderboard" exact element={<Leaderboard />} />
        <Route path="/404" exact element={<NotFound />}/>
        <Route path="*" exact element={<NotFound />}/>
      </Routes>
    </Fragment>
  )
};

const mapStateToProps = ({ authedUser }) => ({
  showLogin: authedUser === null
});

export default connect(mapStateToProps)(App);
