import React from 'react'

const Login = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between ">
      <div className="bg-white w-full md:w-1/2">
        <div className="flex flex-col items-start px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">Please Login</h1>
          <form className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img className="h-full w-full object-cover" src="https://i.ibb.co/1T99Bmf/image-1-1.png" alt="Login" />
      </div>
    </div>
    </>
  )
}

export default Login