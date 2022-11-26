import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { serviceMock } from '../services/service_mock';

const Login = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user } = await serviceMock.login(email, password);
      setCurrentUser(user);
      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <div className='relative flex flex-col -mt-40 -mb-40 min-h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-red-600 lg:max-w-xl'>
        <h1 className='text-3xl font-semibold text-center text-red-600  uppercase decoration-wavy'>
          Login SITEC
        </h1>
        <form className='mt-6'>
          <div className='mb-2'>
            <label for='email' className='block text-sm font-semibold text-gray-800'>
              Email
            </label>
            <input
              type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
              className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mb-2'>
            <label for='password' className='block text-sm font-semibold text-gray-800'>
              Password
            </label>
            <input
              type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
              className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
          <div className='mt-6'>
            <button
              type='submit'
              value='submit'
                 onClick={handleLogin}
              className=' w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-red-600 focus:outline-none bg-red-600 focus:bg-red-600'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
