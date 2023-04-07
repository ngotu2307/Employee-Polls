import Navigation from "../Navigation";
import ListQuestions from "./ListQuestions";
import { connect } from "react-redux";

const Dashboard = (props) => {

  const authedUser = props.authedUser;
  const questionIds = Object.keys(props.questions);
  const listNewQuestionsId = [];
  const listDoneQuestionsId = [];

  questionIds.filter(questionId => {
    const q = props.questions[questionId];
    const opt1Votes = q.optionOne.votes;
    const opt2Votes = q.optionTwo.votes;
    if(!opt1Votes.includes(authedUser) && !opt2Votes.includes(authedUser)) {
      listNewQuestionsId.push(questionId);
    } else {
      listDoneQuestionsId.push(questionId);
    }
  })
  // console.log(listNewQuestionsId);
  // console.log(listDoneQuestionsId);

  return (
    <>
      <Navigation />
      <ListQuestions title="New Questions" listQuestionId={listNewQuestionsId} />
      <ListQuestions title="Done" listQuestionId={listDoneQuestionsId} />
    </>
  );
}

const mapStateToProps = ({ questions, authedUser }) => ({
  questions,
  authedUser
})

export default connect(mapStateToProps)(Dashboard);