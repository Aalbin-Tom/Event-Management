import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function UserLogin() {

    const initialValues = { email: "", password: "" };
    const [message, setMessages] = useState('')
    const [emailerr, setEmailerr] = useState('')
    const [node, setNode] = useState('')
    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log("hiiiiiiiiii");
        e.preventDefault()

        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmailerr(regEx)
        if (regEx.test(formValues.email)) {
            setMessages("")
        } else if (!regEx.test(formValues.email)) {
            setMessages("Email is not valid");
        }
        else {
            setMessages("")
        }
        if (!regEx.test(formValues.email) && formValues.email.length === 0 && formValues.password.length === 0) {
            setError("true")
        }


        if (regEx.test(formValues.email) && formValues.email.length != 0 && formValues.password.length != 0) {
            try {
                await axios.post('/login-user', formValues)
                navigate('/')
                console.log();
            } catch (error) {
                setNode(error.response.data.message)
                // console.log(error);
            }

        }
    }

    return (
        <div className='bg-gradient-to-r from-violet-600 to-cyan-500 flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='shadow-black max-w-[400px] w-full   mx-auto bg-white p-8 px-8 rounded-3xl'

            >
                <h1 className='font-bold text-center text-2xl '> USER LOGIN</h1>
                <br />
                <span className='flex justify-center font-bold text-red-500'>{node}</span>

                <div className='flex flex-col text-grey-500 py-2'>
                    {/* <label className='text-gray-600'> Email Address</label> */}
                    <input className=' rounded-full bg-blue-100 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-green-400'
                        // placeholder='Email Address'
                        // type="text"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}

                        id="email"
                        type="email"
                        name='email'
                        onChange={handleChange}
                        placeholder='Enter Your Email'


                    /> <span style={{ color: "red" }} >{error && !emailerr.test(formValues.email) ?
                        'Email cannot be empty' : ""}
                    </span>

                </div>



                <div className='flex flex-col text-grey-500 py-2'>
                    {/* <label className='text-gray-600'> Password</label> */}
                    <input className='rounded-full bg-blue-200 mt-2 p-2 focus:border-red-500 focus:bg-grey-800 focus:outline-green-400'
                        // placeholder='Password'
                        // type="password"
                        // value={password}
                        // onChange={e => setPassword(e.target.value)}

                        onChange={handleChange}
                        name='password'
                        id="password"
                        type="password"
                        placeholder='Enter Your Email'
                    />  <span>{error && formValues.password.length <= 0 ?
                        <label style={{ color: "red" }} >Password cannot be empty </label> : ""}</span>
                    <br />

                </div>


                {/* <div className='flex justify-between text-gray-500 py-2'>
                </div> */}


                <button type='submit' className=' w-full inline-block px-12 py-2.5 bg-green-600 text-white  leading-tight text-xl font-bold rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out  shadow-green-600/50 '>
                    Login
                </button>
                <br />
                <br />
                {/* <button
            className=' border border-black rounded-full w-full inline-block px-10 py-3 text-blue-400 hover:text-white  leading-tight text-sm font-bold shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out  shadow-shadow-600/50 '
            
          >
           Login With Google
          </button>  */}



                <div>
                    <Link to="/signup">
                        Dont have an account? <span className='text-green-600'>Sign Up</span>
                    </Link>

                </div>



            </form>
        </div>
    )
}

export default UserLogin
