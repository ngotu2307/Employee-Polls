import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import LoginImages from '../res/LoginImages';

const NewPollPage = ({ categoryName, listQuestions }) => {
  return (
    <div>
      <Navigation />
      <div className='container'>
        <h2>Would You Rather</h2>
        <h6>Create Your Own Poll</h6>
        <form>
          <label>
            <p>First option</p>
            <input type="text" placeholder='Option One' />
          </label>
          <p></p>
          <label>
            <p>Second option</p>
            <input type="password" placeholder='Option Two' />
          </label>
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

  );
}

export default NewPollPage;