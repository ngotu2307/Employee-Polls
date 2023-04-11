import Navigation from "../Navigation";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';

const Leaderboard = (props) => {
  console.log("Leaderboard props: ", props);
  const { users, dispatch, authedUser } = props;
  const location = useLocation();
  if (!authedUser) {
    return <Navigate to="/login" state={{ prevPath: location.pathname }} />;
  }

  return (
    <>
      <Navigation />
      <div className="container m-5">
        <Table bordered hover>
          <thead className="text-bg-info">
            <tr>
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className='d-flex flex-row'>
                      <div className="d-flex align-items-center">
                        <img width={40} height={40} src={user !== undefined ? user.avatarURL : undefined} className='rounded-circle' alt="Profile" />
                      </div>
                      <div className="ms-3 d-flex flex-column">
                        <p className="p-0 m-0 fw-bold">{user !== undefined && user.name}</p>
                        <p className="p-0 m-0 text-black-50">{user !== undefined && user.id}</p>
                      </div>

                      {/* <div className='d-flex flex-column '>
                        <p >{user !== undefined && user.name}</p>
                        <p >{user !== undefined && user.id}</p>
                      </div> */}
                    </div>
                  </td>
                  <td>{Object.keys(user.answers).length}</td>
                  <td>{user.questions.length}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.values(users).sort((a, b) => (
      Object.keys(b.answers).length + Object.keys(b.questions).length)
        - ( Object.keys(a.answers).length + Object.keys(a.questions).length)
      ),
    authedUser
  }
};

export default connect(mapStateToProps)(Leaderboard);