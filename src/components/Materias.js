import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Materias = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      // todo add materias template!
      <h1>Materias</h1>
      {currentUser ? (
        <p>You are logged in</p>
      ) : (
        <p>You are not logged in</p>
      )}
      <Link to="/login">Login</Link>
      <br />
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Materias;