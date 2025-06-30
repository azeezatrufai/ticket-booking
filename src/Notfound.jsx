import React from 'react'
import { Link } from 'react-router-dom';

export default function Notfound() {
  return (
    <div className='flex justify-center items-center p-25 text-3xl'>
    <div className='flex flex-col font-bold justify-center items-center text-white p-10'>
    <h1>404-Page not found</h1><br/>
    <p>This page does not exist</p><br/>
    <Link to='/'>Go to <span className='text-cyan-400'>Homepage</span> </Link>
    </div>
    </div>
  )
}
