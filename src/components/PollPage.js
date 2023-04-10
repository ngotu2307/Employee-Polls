import { Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import LoginImages from '../res/images';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import { handerSaveQuestionAnswer } from '../actions/questions';
import { useNavigate } from 'react-router-dom';

const PollPage = (props) => {
  const navigate = useNavigate();
  let q, questionAuthor;
  const { id } = useParams();
  const location = useLocation();
  q = props.questions[id];
  questionAuthor = location.state.questionAuthor;

  // Catch exception when trying to refresh PollPage
  if(q === undefined || questionAuthor == undefined) return <Navigate to="/404" />

  const authorInfo = props.users[questionAuthor];
  const optionOneVoted = q.optionOne.votes.includes(props.authedUser);
  const optionTwoVoted = q.optionTwo.votes.includes(props.authedUser);

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
      <div className='container d-flex flex-column'>
        <h5 className='text-center'>Poll by {q.author}</h5>
        <div className="text-center mt-3">
          <img width="15%" src={authorInfo.avatarURL} className='rounded-circle' alt="Profile" />
        </div>
        <h4 className='text-center mt-4 mb-3'>Would You Rather</h4>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='m-2 p-3 d-flex flex-column border'>
              <p className="text-center">{q.optionOne.text}</p>
              <Button
                onClick={() => handleChooseOptionOne()}
                variant={(optionOneVoted || (!optionOneVoted && !optionTwoVoted)) ? "success" : "secondary"}
                disabled={optionOneVoted || optionTwoVoted}>Click
              </Button>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='m-2 p-3 d-flex flex-column border'>
              <p className="text-center" s>{q.optionTwo.text}</p>
              <Button
                onClick={() => handleChooseOptionTwo()}
                variant={(optionTwoVoted || (!optionOneVoted && !optionTwoVoted)) ? "success" : "secondary"}
                disabled={optionOneVoted || optionTwoVoted}>Click
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
  questions,
  users,
  authedUser,
})

export default connect(mapStateToProps)(PollPage);