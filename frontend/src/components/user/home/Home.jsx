import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import API from '../../../url'
import './home.css'
import moment from 'moment'
import { BiCommentDots } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


function Home() {
    // const [image, setImage] = useState('')
    // const [discription, setDiscription] = useState('')
    // const [user, setUser] = useState('')
    const [post, setPosts] = useState([])
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

    const navigate = useNavigate();

    // const submit = async (e) => {
    //     e.preventDefault()
    //     let user = JSON.parse(localStorage.getItem('loginInfo'))
    //     setUser(user)
    //     console.log(user);
    //     const userid = user._id;
    //     const formdata = new FormData()

    //     formdata.append('image', image)
    //     formdata.append('disription', discription)
    //     formdata.append('userid', userid)
    //     console.log(formdata.get('image'));

    //     const config = {
    //         header: {
    //             "Content-Type": "multipart/form-data"
    //         }
    //     }
    //     await axios.post(`${API}/add-post`,
    //         formdata,
    //         config
    //     )
    //     setImage('')
    //     setDiscription('')
    //     forceUpdate();
    // }

    // const onImage = (e) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         setImage(e.target.files[0])
    //     }
    // }


    const like = async (_id, index) => {
        console.log(_id);
        let user = JSON.parse(localStorage.getItem('loginInfo'))
        const { data } = await axios.post(`${API}/like-posts`, { _id: _id, userId: user._id })
        const change = data.post.likes.includes(user._id)
        forceUpdate();
    }


    const posts = async () => {
        const resp = await axios.get(`${API}/get-posts`)
        setPosts(resp.data.post)
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('loginInfo'))
        // setUser(user)
        posts()
        like()
        if (user) {
            navigate('/')
        } else {
            navigate('/login')
        }

    }, [reducerValue])


    return (
        < >

                <div className="main flex p-3 space-x-2 bg-gray-100 flex-row pt-2">
                <div className=' basis-1/3  rounded-lg bg-white' >
                        <div>
                            01
                        </div>
                    </div>
                    <div className='post overflow-y-auto basis-4/6 rounded-xl bg-gray-100 h-[89vh]'>


                        {
                            post.map((data, index) => (
                                <div key={index} className='rounded-lg mb-3 bg-white'>
                                    <div className="shrink-0 py-1 flex gap-2 pl-5">
                                        <img className="h-12 w-12 object-cover rounded-full" src={data.userId.pic} alt="Current profile photo" />
                                        <div className=''>
                                            <h1 className='pt-3 font-bold '>{data.userId.name}</h1>
                                            <span className='font-semibold text-sm'> {moment(data.createdAt).startOf('seconds').fromNow()}</span>
                                        </div>
                                    </div>
                                
                                    <div className='flex justify-center h-auto w-12/12'>
                                        <img className='rounded' src={data.image} alt="" />
                                    </div>
                                    <p className='pl-9 font-bold'>{data.disription}</p>
                                    <div className='pl-7 reaction flex gap-4 py-4 cursor-pointer font-bold'>

                                        <span onClick={() => { like(data._id, index) }}> {data.likes.includes(data.userId._id) ? <AiFillHeart color='rgb(16 185 129)' size={25} /> : <AiOutlineHeart size={25} />}  </span> {data.likes.length}
                                        < BiCommentDots size={25} />
                                      
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className='basis-1/3 rounded-lg bg-white' >03</div>
                </div>


            


        </>
    )
}

export default Home
