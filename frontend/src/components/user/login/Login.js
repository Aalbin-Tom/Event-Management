import React, { useState } from 'react'
import './login.css'
import UserLogin from './UserLogin';
import BusinessLogin from './BusinessLogin';
import UsersLogin from './UsersLogin';

function Login() {

    const [logins, setLogins] = useState(true)
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            {/* imaGE PART */}
            <div className='background  hidden sm:block' >
                <div className='flex flex-auto justify-center pt-48'>
                    <div className='w-9/12  text-2xl ' >
                        <h1 className='text-black flex justify-center py-10 text-4xl font-bold'>OSCAR EVENTS</h1 >
                        <h1 className='text-white font-semibold text-3xl py-10 flex justify-center'>“Some people look for a beautiful place.<br /> Others make a place beautiful”</h1>
                        <div className='py-10 '>
                            {logins ?
                                <button className='border-none rounded-full w-full inline-block px-10 py-3 bg-blue-200 text-black leading-tight text-sm font-bold shadow-md ' onClick={() => { setLogins(prevCheck => !prevCheck) }} >Login as USER Account</button> :
                                <button className='border-none rounded-full w-full inline-block px-10 py-3 bg-blue-200 text-black leading-tight text-sm font-bold shadow-md ' onClick={() => { setLogins(prevCheck => !prevCheck) }} >Login as BUSINESS Account</button>}
                        </div>
                    </div>
                </div>
            </div>
            {/* log in component */}
            <div className='bg-gradient-to-r from-violet-600 to-cyan-500 flex flex-col justify-center'>
                <div className='visible sm:invisible '>
                    {logins ?
                        < button className='border-none rounded-full w-full inline-block px-10 py-3  text-white hover:text-white  leading-tight text-sm font-bold shadow-md ' onClick={() => { setLogins(prevCheck => !prevCheck) }} >Login as USER Account</button> :
                        <button className='border-none rounded-full w-full inline-block px-10 py-3 text-white hover:text-white  leading-tight text-sm font-bold shadow-md ' onClick={() => { setLogins(prevCheck => !prevCheck) }} >Login as BUSINESS Account</button>}

                </div><br />

                {logins ? <UserLogin /> :
                    <BusinessLogin />}

            </div>

        </div >
    )
}

export default Login
