import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import LoginImages from '../res/LoginImages';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';

const PollPage = (props) => {

  const { id } = useParams();

  const q = props.questions[id];
  const optionOneVoted = q.optionOne.votes.includes(props.authedUser);
  const optionTwoVoted = q.optionTwo.votes.includes(props.authedUser);
  console.log("opt1Votes: ", q.optionOne.votes);
  console.log("opt2Votes: ", q.optionTwo.votes);

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
              variant={optionOneVoted ? "secondary" : "success"}
              disabled={optionOneVoted}>Click
            </Button>
          </div>
          <div className='border p-2'>
            <p>{q.optionTwo.text}</p>
            <Button
              variant={optionTwoVoted ? "secondary" : "success"}
              disabled={optionTwoVoted}>Click
            </Button>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = ({ authedUser, users, questions }) => ({
  questions,
  authedUser,
})

export default connect(mapStateToProps)(PollPage);