import { IconKey, IconLock, IconLogin } from '@tabler/icons-react';
import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen z-50 bg-gray-100">
      <div className="flex shadow-lg rounded-lg overflow-hidden bg-white max-w-4xl">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Login </h2>
          <div className="flex justify-center my-4">
            
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              />
            </div>
            
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 back text-white hover:scale-105 transition-all font-semibold rounded-md hover:bg-red-600 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className=" md:block w-1/2 h-96 back p-12 flex items-center justify-center">
          <div className="text-white items-center flex flex-col justify-center w-full h-full text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to login</h2>
            <IconLogin className='w-1/2 h-1/3'/>
            
          </div>
        </div>
      </div>
    </div>
  );
}
