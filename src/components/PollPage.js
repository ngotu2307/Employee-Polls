import { Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import LoginImages from '../res/images';
import { useParams, useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import { handerSaveQuestionAnswer } from '../actions/questions';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const PollPage = (props) => {
  const navigate = useNavigate();
  let q, questionAuthor;
  const { id } = useParams();
  const location = useLocation();
  q = props.questions[id];

  const sumUser = Object.keys(props.users).length;
  console.log("sumUser: ", sumUser);

  if (!props.authedUser) {
    return <Navigate to="/login" state={{ prevPath: location.pathname }} />;
  }

  // Catch exception when trying to refresh PollPage
  if (q === undefined || location.state === null) return <Navigate to="/404" />
  questionAuthor = location.state.questionAuthor;
  const isNewQuestion = location.state.isNewQuestion;

  const authorInfo = props.users[questionAuthor];
  const optionOneVoted = q.optionOne.votes.includes(props.authedUser);
  const optionTwoVoted = q.optionTwo.votes.includes(props.authedUser);

  const calPercentage = (number, sum) => {
    return Math.round(number / sum * 100);
  }

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

        {
          !isNewQuestion && (
            <div className="row m-2 p-3 ">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Your choice</th>
                    <th>Voted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{q.optionOne.text}</td>
                    <td>{optionOneVoted ? "X" : "O"}</td>
                    <td>{calPercentage(q.optionOne.votes.length, sumUser)}%</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>{q.optionTwo.text}</td>
                    <td>{optionTwoVoted ? "X" : "O"}</td>
                    <td>{calPercentage(q.optionTwo.votes.length, sumUser)}%</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )
        }

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