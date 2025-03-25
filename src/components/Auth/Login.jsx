import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
     
      
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="bg-black border-4 border-cyan-900 p-6 shadow-2xl rounded-2xl w-80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">  
          <form onSubmit={submitHandler} className="space-y-6 flex flex-col">
            <h2 className="text-2xl font-bold text-center text-pink-800 drop-shadow-lg">Login Form</h2>
            
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Enter your email"
              className="mt-6 w-full px-5 py-3 border-3 border-cyan-900 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter your password"
              className="w-full px-5 py-3 border-3 border-cyan-900 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            
            <button 
              className="mt-3 w-full bg-gradient-to-r from-cyan-800 to-cyan-900 text-white py-3 rounded-lg font-semibold shadow-lg hover:from-cyan-600 hover:to-cyan-700 transition-transform transform hover:scale-95">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="text-center p-4 bg-gray-800 text-white rounded-lg shadow-md max-w-md mx-auto my-4">
        <h3 className="text-lg font-semibold underline">Emails and Passwords for Testing</h3>
        <p className="font-medium">Emails:</p>
        <p className="text-cyan-400">p@p.com</p>
        <p className="text-cyan-400">k@k.com</p>
        <p className="text-cyan-400">n@n.com</p>
        <p className="text-cyan-400">l@l.com</p>
        <p className="text-cyan-400">s@s.com</p>
        <p className="font-medium mt-2 underline">Password:</p>
        <p className="text-cyan-400">123</p>
      </div>
    </>
  );
};

export default Login;
