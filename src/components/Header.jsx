import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className=" text-white mr-6">
        <Link to="/">
          <h2 className='text-3xl font-semibold'>Auth<span className='text-3xl text-pink-400'>Pro</span></h2>
        </Link>
      </div>
      <div>
        <div className="text-sm lg:flex-grow">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-10">
            Home
          </Link>
          <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-10">
            Login
          </Link>
          <Link to="/logout" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-10">
            Logout
          </Link>
          <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
            Register
          </Link>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header