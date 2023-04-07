import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ListQuestions = (props) => {
  const navigate = useNavigate();

  const handleClickShow = (qid) => {
    navigate(`/poll/${qid}`);
  }

  return (
    <div>
      <div className='border'>
        <p>{props.title}</p>
        <div className='d-flex flex-row flex-wrap justify-content-around'>
          {
            props.listQuestionId.map(qid => {
              const q = props.questions[qid];
              return (
                <div className='border p-2' key={q.id}>
                  <p>{q.author}</p>
                  <p>{new Date(q.timestamp).toLocaleString()}</p>
                  <button onClick={() => handleClickShow(qid)}>Shows</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }, { title, listQuestionId }) => ({
  questions,
  title,
  listQuestionId
})

export default connect(mapStateToProps)(ListQuestions);