'use client'
import React, { useState } from "react";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log(credentials);
  };

  const handleGoogleSignIn = () => {
    // Integrate Google Sign-In logic here
    console.log('Google Sign-In');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">Log In</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log In</button>
        </div>
        <p className="text-center my-4">or</p>
        <button onClick={handleGoogleSignIn} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">Sign in with Google</button>
        <p className="text-gray-600 text-center mt-4">Don't have an account? <a href="/signup" className="text-red-500 hover:text-red-700">Sign up here</a></p>
      </form>
    </div>
  );
};

export default LoginPage;
