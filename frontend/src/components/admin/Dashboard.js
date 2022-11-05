import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUsers, FaImages } from 'react-icons/fa'
import API from '../../url'

function Dashboard() {
    const [post, setPosts] = useState([])
    const [user, setUsers] = useState([])
    const [business, setBusiness] = useState([])


    const posts = async () => {
        const resp = await axios.get(`${API}/get-posts`)
        setPosts(resp.data.post)
    }

    const users = async () => {
        const user = await axios.get(`${API}/admin/get-users`)
        setUsers(user.data.users)
    }

    const businesss = async () => {
        const user = await axios.get(`${API}/admin/get-business`)
        setBusiness(user.data.users)
        console.log(user.data.users);
    }


    useEffect(() => {

        businesss()
        users()
        posts()

    }, [])

    console.log(business);
    return (
        <div className='bg-red-200 '>
            <div className='pb-8 font-bold'>
                <h1 >DASHBOARD</h1>
            </div>
            <div className='flex gap-5'>
                <div className="w-64  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='ml-5 flex justify-center text-gray-500 dark:text-gray-400'><FaUsers size={30} /> </div>
                    <div >
                        <h5 className="flex justify-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Users </h5>
                    </div>
                    <p className=" flex justify-center mb-3 font-normal text-gray-500 dark:text-gray-400">{user.length} </p>

                </div>

                <div className="w-64  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='ml-5 flex justify-center text-gray-500 dark:text-gray-400'><FaUsers size={30} /> </div>
                    <div >
                        <h5 className="flex justify-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total business</h5>
                    </div>
                    <p className=" flex justify-center mb-3 font-normal text-gray-500 dark:text-gray-400"> {business.length}</p>

                </div>

                <div className="w-64 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className='ml-5 flex justify-center text-gray-500 dark:text-gray-400'><FaImages size={30} /> </div>
                    <div >
                        <h5 className="flex justify-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Total Posts </h5>
                    </div>
                    <p className=" flex justify-center mb-3 font-normal text-gray-500 dark:text-gray-400">{post.length} </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
