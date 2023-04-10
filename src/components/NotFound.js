import React from 'react';
import { Link } from 'react-router-dom';
import images from '../res/images';

const NotFound = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="text-center mt-3">
        <img width="40%" src={images.notFound} alt="Not found" />
      </div>
      <br />
      <Link to="/" className="link-home">
        <p className='text-center'>Go Home</p>
      </Link>
    </div>
  );
}

export default NotFound;