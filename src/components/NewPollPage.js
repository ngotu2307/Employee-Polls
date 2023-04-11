import Navigation from './Navigation';
import { connect } from "react-redux";
import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { handerSaveNewQuestion } from '../actions/questions';

const NewPollPage = ({ dispatch, authedUser }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const location = useLocation();
  if (!authedUser) {
    return <Navigate to="/login" state={{ prevPath: location.pathname }} />;
  }

  const setTempOptionOne = (tOptionOne) => {
    setErrorMessage("");
    if (tOptionOne === "") {
      setErrorMessage("Please enter Option One");
    }
    setOptionOne(tOptionOne);
  }

  const setTempOptionTwo = (tOptionTwo) => {
    setErrorMessage("");
    if (tOptionTwo === "") {
      setErrorMessage("Please enter Option Two");
    }
    setOptionTwo(tOptionTwo);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (optionOne === "") {
      setErrorMessage("Please enter optionOne");
      return;
    }

    if (optionTwo === "") {
      setErrorMessage("Please enter optionTwo");
      return;
    }
    setErrorMessage("");

    dispatch(handerSaveNewQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    }));
    navigate("/");
  }

  return (
    <div>
      <Navigation />
      <div className='container col-sm-12 d-flex flex-column justify-content-center'>
        <h4 className='text-center mt-4 mb-1'>Would You Rather</h4>
        <h6 className='text-center text-black-50 mb-3'>Create Your Own Poll</h6>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column justify-content-center">
            <div className="form-group text-center">
              <label className='mb-1' htmlFor="firstOption">First option</label>
              <input type="text" className="form-control" id="firstOption" placeholder="Option One" onChange={e => setTempOptionOne(e.target.value)} />
            </div>
            <br />
            <div className="form-group text-center">
              <label className='mb-1' htmlFor="secondOption">Password</label>
              <input type="text" className="form-control" id="secondOption" placeholder="Option Two" onChange={e => setTempOptionTwo(e.target.value)} />
            </div>
            <p />
            <div className='text-center'>
              <button type="submit" disabled={errorMessage !== ""} className={errorMessage === "" ? "btn btn-primary" : "btn btn-secondary"} >Submit</button>
            </div>
          </div>
        </form>
        <p className='text-danger'>{errorMessage}</p>
      </div>
    </div>

  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})

export default connect(mapStateToProps)(NewPollPage);