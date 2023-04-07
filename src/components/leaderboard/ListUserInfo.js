import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Users from './User';

const ListUserInfo = ({ categoryName, listQuestions }) => {
  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Users</th>
          <th>Answered</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ <Users /> }</td>
          <td>4</td>
          <td>2</td>
        </tr>
        <tr>
          <td>{ <Users /> }</td>
          <td>3</td>
          <td>3</td>
        </tr>
        <tr>
          <td>{ <Users /> }</td>
          <td>2</td>
          <td>2</td>
        </tr>
      </tbody>
    </Table>
    </div>

  );
}

export default ListUserInfo;