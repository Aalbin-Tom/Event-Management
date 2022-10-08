import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'


function UserLogin() {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    // const [errors, setErrors] = useState("")

    const
        { values, handleBlur, handleChange, handleSubmit } = useFormik({
            initialValues: {
                email: "",
                password: ""
            },

        })
    const validate = values => {
        const errors = { email: "", password: "" }
        if (!values.email) {
            errors.email = 'Should not be Empty'
        } else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            errors.email = 'Enter a valid Email'
        }
        if (!values.password) {
            errors.password = 'Should not be Empty'

        }

        console.log(errors);
        return errors
    }
    // console.log(validate);
    const navigate = useNavigate();
    return (
        <div className='bg-gradient-to-r from-violet-600 to-cyan-500 flex flex-col justify-center'>
            <form className='shadow-black max-w-[400px] w-full   mx-auto bg-white p-8 px-8 rounded-3xl'

            >
                <h1 className='font-bold text-center text-2xl '> USER LOGIN</h1>
                <br />
                <span className='text-red-500'>{error}</span>

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
                        onBlur={handleBlur}

                    />
                    {/* <div className='text-red-700'>{errors}</div> */}

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
                        onBlur={handleBlur}

                    />
                    {/* {error} */}
                </div>

                <div className='flex justify-between text-gray-500 py-2'>
                </div>
                <br />

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
