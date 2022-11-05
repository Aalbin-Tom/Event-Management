import React, { useState } from 'react'
import './login.css'
import UserLogin from './UserLogin';
import BusinessLogin from './BusinessLogin';
// import UsersLogin from './UsersLogin';

function Login() {

    const [users, setUsers] = useState(true)

    // let prevCheck = true;
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            {/* imaGE PART */}
            <div className='background  hidden sm:block' >
                <div className='flex flex-auto justify-center pt-48'>
                    <div className='w-9/12  text-2xl ' >
                        <h1 className='text-black flex justify-center py-10 text-4xl font-bold'>OSCAR EVENTS</h1 >
                        <h1 className='text-white font-semibold text-3xl py-10 flex justify-center'>“Some people look for a beautiful place.<br /> Others make a place beautiful”</h1>
                        <div className='py-10 flex justify-evenly '>

                            <button className='border-none rounded-full w-56 inline-block px-1 py-3 bg-blue-200 text-black leading-tight text-sm font-bold shadow-md ' onClick={() => { setUsers(!users) }} >  USER </button>
                            <button className='border-none rounded-full w-56 inline-block px-1 py-3 bg-blue-200 text-black leading-tight text-sm font-bold shadow-md ' onClick={() => { setUsers(!users) }} > BUSINESS </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* log in component */}
            <div className='bg-gradient-to-r from-violet-600 to-cyan-500 flex flex-col justify-center'>
                <div className='visible sm:invisible '>
                    {users ?
                        < button className='border-none rounded-full w-full inline-block px-10 py-3  text-white hover:text-white  leading-tight text-sm font-bold shadow-md ' onClick={() => { setUsers(!users) }} > USER Account</button> :
                        <button className='border-none rounded-full w-full inline-block px-10 py-3 text-white hover:text-white  leading-tight text-sm font-bold shadow-md ' onClick={() => { setUsers(!users) }} > BUSINESS Account</button>}

                </div><br />

                {users ? <UserLogin /> :
                    <BusinessLogin />}

            </div>

        </div >
    )
}

export default Login
