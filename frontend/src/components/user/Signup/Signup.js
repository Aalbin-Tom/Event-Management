import React, { useState } from 'react'
import axios from 'axios'
import API from '../../../url' 
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login } from '../../../features/userSlice'

function Signup() {


    const initialValues = { email: "", password: "", name: "", type: "", phone: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [message, setMessages] = useState('')
    const [error, setError] = useState(false)




    const handleChange = (e) => {
        // const { name, value } = e.target;
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const user = useSelector((state) => state.user.value)

    const options = [
        { value: 'user', label: 'User' },
        { value: 'business', label: 'Business' },
    ]

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        console.log("hiiiiiiiiii");
        e.preventDefault()

        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (regEx.test(formValues.email)) {
            setMessages("")
        } else if (!regEx.test(formValues.email)) {
            setMessages("Email is not valid");
        }
        else {
            setMessages("")
        }
        if (formValues.name.length === 0 && !regEx.test(formValues.email) && formValues.email.length === 0 && formValues.type.length === 0 && formValues.phone.length === 0 && formValues.password.length === 0) {
            setError("true")
        }


        if (regEx.test(formValues.email) && formValues.name.length != 0 && formValues.email.length != 0 && formValues.phone.length != 0 && formValues.type.length != 0 && formValues.password.length != 0) {
            try {
                await axios.post(`${API}/signup`, formValues)
                navigate('/login')
                console.log();
            } catch (error) {
                setMessages(error.response.data.message)
                console.log(error);
            }

        }
    }


    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                {/* imaGE PART */}
                <div className='background  hidden sm:block ' style={{ backgroundColor: "#7a3cec" }} >
                    <div className='flex flex-auto justify-center pt-32'>
                        <div className='w-9/12  text-2xl ' >
                            <h1 className='text-black flex justify-center py-10 text-4xl font-bold'>OSCAR EVENTS</h1 >
                            <h1 className='text-white font-semibold text-3xl py-10 flex justify-center'>“Some people look for a beautiful place.<br /> Others make a place beautiful”</h1>
                            <div className='py-10 '>
                                <button className='border-none rounded-full w-full inline-block px-10 py-3 bg-blue-200 text-black leading-tight text-sm font-bold shadow-md ' >LETS GET STARTED </button>

                            </div>
                        </div>
                    </div>
                </div>
                {/* log in component */}
                <div className='bg-gradient-to-r from-violet-600 to-cyan-500 flex flex-col justify-center'>
                    <div className='visible sm:invisible '>

                    </div><br />
                    <div className='bg-gradient-to-r from-violet-600 to-cyan-500 flex flex-col justify-center'>
                        <form onSubmit={handleSubmit}
                            className='shadow-black max-w-[400px] w-full   mx-auto bg-white p-8 px-8 rounded-3xl'

                        >
                            <h1 className='font-bold text-center text-2xl '> SIGN UP</h1>
                            <br />
                            <span className='flex font-bold justify-center text-red-500'>{message}</span>

                            <div className='flex flex-col text-grey-500 py-2'>
                                <input className=' rounded-full bg-blue-100 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-green-400'
                                    placeholder='Name'
                                    type="text"
                                    name='name'
                                    value={formValues.name}
                                    onChange={handleChange}
                                /><span>{error && formValues.name.length <= 0 ?
                                    <label style={{ color: "red" }} >Name cannot be empty </label> : ""}</span>
                                <br />


                                <input className=' rounded-full bg-blue-100 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-green-400'
                                    placeholder='Email Address'
                                    type="text"
                                    name='email'
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                                <span>{error && formValues.email.length <= 0 ?
                                    <label style={{ color: "red" }} >Email cannot be empty </label> : ""}</span>
                                <br />


                                <input className=' rounded-full bg-blue-100 mt-2 p-2 focus:border-blue-500 focus:bg-grey-800 focus:outline-green-400'
                                    placeholder='Phone Number'
                                    type="number"
                                    name='phone'
                                    value={formValues.phone}
                                    onChange={handleChange} />
                                <span>{error && formValues.phone.length <= 0 ?
                                    <label style={{ color: "red" }} >Phone cannot be empty </label> : ""}</span>
                                <br />


                                <input className='rounded-full bg-blue-200 mt-2 p-2 focus:border-red-500 focus:bg-grey-800 focus:outline-green-400'
                                    placeholder='Password'
                                    type="password"
                                    name='password'
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                                <span>{error && formValues.password.length <= 0 ?
                                    <label style={{ color: "red" }} >Password cannot be empty </label> : ""}</span>
                                <br />


                                <select name='type' onChange={handleChange} className='rounded-full bg-blue-200 mt-2 p-2  focus:outline-green-400 required:selection:'>
                                    <option >
                                        select a value
                                    </option>
                                    {options.map((data, i) => (

                                        <option key={i} value={data.value}>
                                            {data.label}
                                        </option>
                                    ))}

                                </select><span>{error && formValues.type.length <= 0 ?
                                    <label style={{ color: "red" }} >select any</label> : ""}</span><br />
                            </div>

                            {/* <div className='flex justify-between text-gray-500 py-2'>
                            </div> */}
                            <br />

                            <button className=' w-full inline-block px-12 py-2.5 bg-green-600 text-white  leading-tight text-xl font-bold rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out  shadow-green-600/50 '>
                                Signup
                            </button>
                            <br />

                            <button
                                className='mt-3 border border-black rounded-full w-full inline-block px-10 py-3 text-blue-400 hover:text-white  leading-tight text-sm font-bold shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out  shadow-shadow-600/50 '

                            // onClick={() => { dispatch(login({ emial: "aalbin", password: "", name: "", phone: "", type: "" })) }} 
                            >
                                Login With Google
                            </button>



                            <div>
                                <Link to="/login">
                                    Dont have an account? <span className='text-green-600'>Login</span>
                                </Link>

                            </div>



                        </form>
                    </div>

                </div>




            </div >
        </div >
    )
}

export default Signup
