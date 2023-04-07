import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { connect } from "react-redux";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handerSaveNewQuestion } from '../actions/questions';

const NewPollPage = ({ dispatch, authedUser }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

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
      <div className='container'>
        <h2>Would You Rather</h2>
        <h6>Create Your Own Poll</h6>
        <form onSubmit={handleSubmit}>
          <label>
            <p>First option</p>
            <input type="text" placeholder='Option One' onChange={e => setOptionOne(e.target.value)} />
          </label>
          <br />
          <label>
            <p>Second option</p>
            <input type="text" placeholder='Option Two' onChange={e => setOptionTwo(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
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