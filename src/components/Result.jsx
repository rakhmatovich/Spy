import React from 'react'
import { Link } from 'react-router-dom'

export default function Result() {
    const roles = Array(JSON.parse(localStorage.getItem('roles')))
    localStorage.removeItem('roles')

    return (
        <div className='h-screen bg-gradient-to-br from-gray-900 to-cyan-700 flex items-center justify-center'>
            <div className='text-cyan-500 text-5xl gap-9'>
                {roles[0]?.map((role, index) => (
                    <h1 key={index}>{index + 1}. {role}</h1>
                ))}
            </div>
            <Link className='' to='/'>
                    
            </Link>
        </div>
    )
}
