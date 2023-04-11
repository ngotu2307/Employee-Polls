import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const ListQuestions = (props) => {
  const navigate = useNavigate();
  // console.log("Listquestions: props: ", props);

  return (
    <div>
      <div className='container border mb-3 p-3'>
        <h5 className='text-center'>{props.title}</h5>
        <div className='d-flex flex-row flex-wrap justify-content-start'>
          {
            props.listQuestion.map(q => {
              return (
                <div className='d-flex border p-2 flex-column m-3' key={q.id}>
                  <p className='text-center fw-bold'>{q.author}</p>
                  <p className='text-black-50'>{new Date(q.timestamp).toLocaleString()}</p>
                  <Link to={'/question/' + q.id} state={{ questionAuthor: q.author, isNewQuestion: props.isNewQuestion }}>
                    <button className='btn btn-outline-success col-12'>Show</button>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authedUser, users, questions }, { title, listQuestion, isNewQuestion }) => ({
  questions,
  title,
  listQuestion,
  isNewQuestion
})

export default connect(mapStateToProps)(ListQuestions);