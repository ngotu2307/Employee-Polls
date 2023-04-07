import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import LoginImages from '../res/LoginImages';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import { handerSaveQuestionAnswer } from '../actions/questions';
import { useNavigate } from 'react-router-dom';

const PollPage = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const q = props.questions[id];
  const optionOneVoted = q.optionOne.votes.includes(props.authedUser);
  const optionTwoVoted = q.optionTwo.votes.includes(props.authedUser);
  console.log("opt1Votes: ", q.optionOne.votes);
  console.log("opt2Votes: ", q.optionTwo.votes);

  const handleChooseOptionOne = () => {
    props.dispatch(handerSaveQuestionAnswer({
      qid: id,
      authedUser: props.authedUser,
      answer: "optionOne"
    }));
    navigate("/");
  }

  const handleChooseOptionTwo = () => {
    props.dispatch(handerSaveQuestionAnswer({
      qid: id,
      authedUser: props.authedUser,
      answer: "optionTwo"
    }));
    navigate("/");
  }

  return (
    <div>
      <Navigation />
      <div className='container'>
        <p>Poll by {q.author}</p>
        <img src={LoginImages.logo} />
        <p>Would You Rather</p>
        <div className='d-flex flex-row justify-content-between'>
          <div className='border p-2'>
            <p>{q.optionOne.text}</p>
            <Button
              onClick={() => handleChooseOptionOne()}
              variant={(optionOneVoted || (!optionOneVoted && !optionTwoVoted)) ? "success" : "secondary"}
              disabled={optionOneVoted || optionTwoVoted}>Click
            </Button>
          </div>
          <div className='border p-2'>
            <p>{q.optionTwo.text}</p>
            <Button
              onClick={() => handleChooseOptionTwo()}
              variant={(optionTwoVoted || (!optionOneVoted && !optionTwoVoted)) ? "success" : "secondary"}
              disabled={optionOneVoted || optionTwoVoted}>Click
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = ({ authedUser, questions }) => ({
  questions,
  authedUser,
})

export default connect(mapStateToProps)(PollPage);