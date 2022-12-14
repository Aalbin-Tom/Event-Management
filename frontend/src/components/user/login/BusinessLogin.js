import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import API from '../../../url'

function BusinessLogin() {


    const initialValues = { email: "", password: "" };
    const [node, setNode] = useState('')
    const [emailerr, setEmailerr] = useState('')
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

        if (!regEx.test(formValues.email) && formValues.email.length === 0 && formValues.password.length === 0) {
            setError("true")
        }


        if (regEx.test(formValues.email) && formValues.email.length !== 0 && formValues.password.length !== 0) {
            try {
                const { data } = await axios.post(`${API}/login-business`, formValues)
                localStorage.setItem('loginInfo', JSON.stringify(data))
                navigate('/')
            } catch (error) {
                setNode(error.response.data.message)
                console.log(error);
            }

        }
    }
    useEffect(() => {
        let user = localStorage.getItem('loginInfo')
        if (user) {
            navigate('/')
        } else {
            navigate('/login')
        }
    }, [])




    return (
        <div>
            <form onSubmit={handleSubmit} className='shadow-black max-w-[400px] w-full   mx-auto bg-white p-8 px-8 rounded-3xl'

            >
                <h1 className='font-bold text-center text-2xl '>BUSSINES LOGIN</h1>
                <br />
                <span className='font-bold text-red-500'>{node}</span>

                <div className='flex flex-col text-grey-500 py-2'>
                    <input className=' rounded-full bg-blue-100 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-green-400'
                        placeholder='Email Address'
                        type="text"
                        name='email'
                        value={formValues.email}
                        onChange={handleChange}
                    /></div>
                <span className=' text-red-500 ' >{error && !emailerr.test(formValues.email) ?
                    'Enter a valid Email' : ""}
                </span>




                <div className='flex flex-col text-grey-500 py-2'>
                    <input className='rounded-full bg-blue-200 mt-2 p-2 focus:border-red-500 focus:bg-grey-800 focus:outline-green-400'
                        placeholder='Password'
                        type="password"
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />

                </div>
                <span className=' text-red-500 ' >{error && formValues.password.length <= 0 ?
                    <label  >Password cannot be empty </label> : ""}</span>


                <div className='flex justify-between text-gray-500 py-2'>
                </div>


                <button className=' w-full inline-block px-12 py-2.5 bg-green-600 text-white  leading-tight text-xl font-bold rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out  shadow-green-600/50 '>
                    Login
                </button>
                <br />
                <br />


                <div className='flex justify-between'>
                    <Link to="/signup">
                        Dont have an account? <span className='text-green-600'>Sign Up</span>
                    </Link>
                    <Link to="/signup">
                        <span className='text-green-600'>Admin</span>
                    </Link>
                </div>
            </form>
        </div >
    )
}

export default BusinessLogin
