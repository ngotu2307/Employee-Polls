import Navigation from "../Navigation";
import ListQuestions from "./ListQuestions";
import { connect } from "react-redux";
import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';

const Dashboard = (props) => {
  const navigate = useNavigate();
  const authedUser = props.authedUser;
  const listNewQuestions = [];
  const listDoneQuestions = [];
  const [answer, setAnswer] = useState(false);

  const location = useLocation();
  if (!authedUser) {
    return <Navigate to="/login" state={{ prevPath: location.pathname }} />;
  }

  let listQuestion = Object.values(props.questions).sort(
    (a, b) => b.timestamp - a.timestamp
  )
  console.log("listquestion: ", listQuestion);
  const questionIds = Object.keys(listQuestion);

  listQuestion.filter(q => {
    const opt1Votes = q.optionOne.votes;
    const opt2Votes = q.optionTwo.votes;
    if (!opt1Votes.includes(authedUser) && !opt2Votes.includes(authedUser)) {
      listNewQuestions.push(q);
    } else {
      listDoneQuestions.push(q);
    }
  })

  return (
    <>
      <Navigation />
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className={answer === false ? "nav-link active" : "nav-link"} onClick={() => setAnswer(false)}>Unanswered</a>
        </li>
        <li className="nav-item">
          <a className={answer === true ? "nav-link active" : "nav-link"} onClick={() => setAnswer(true)}>Answered</a>
        </li>
      </ul>

      <ListQuestions
        isNewQuestion={!answer}
        title={!answer ? "New Questions" : "Done"}
        listQuestion={!answer ? listNewQuestions : listDoneQuestions} />
    </>
  );
}

const mapStateToProps = ({ questions, authedUser }) => ({
  questions,
  authedUser
})

export default connect(mapStateToProps)(Dashboard);