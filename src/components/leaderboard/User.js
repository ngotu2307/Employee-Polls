import { Link } from 'react-router-dom';
import LoginImages from '../../res/images';

const Users = () => {
    return (
        <div className='d-inline-flex align-items-center'>
            <img height={40} width={40} className='rounded-circle ' src={LoginImages.logo} />
            <div className='border'>
                <p>Sarah Edo</p>
                <p>sarahedo</p>
            </div>
        </div>
    );
}

export default Users;