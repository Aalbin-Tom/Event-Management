import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../../url'
import Navbar from './Navbar/Navbar'



function UserProfile() {

  const navigate = useNavigate()

  const [post, setPosts] = useState([])
  const [user, setUser] = useState('')
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const posts = async (id) => {
    console.log(id, 'kkkkkkkk');
    let user = JSON.parse(localStorage.getItem('loginInfo'))
    setUser(user)
    const { data } = await axios.get(`${API}/get-userposts/${id}`)
    setPosts(data.post)

  }

  const logout = () => {
    localStorage.removeItem("loginInfo");
    navigate(`/login`);
  };


  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('loginInfo'))
    const id = user._id
    posts(id)
  }, [])

  return (

    <div>
      <Navbar />
      <div className='pt-16  bg-gray-300'>
        <div className="flex  items-center justify-evenly ">
          <div className='rounded-full border border-gray-300 h-36 flex  items-center justify-center'>
            <img src={user.image} className='w-32 rounded-full' lasss alt="" />
          </div>

          <div className="">
            <div className='flex items-center justify-between'>
              <div className="flex  gap-16 ">
                <span className="font-thin text-3xl">
                  {user.name}
                </span>
                <div className="dropdown">
                  <button className='border-none rounded-full w-32 inline-block py-3 bg-blue-400 hover:bg-red-300 text-black leading-tight text-sm font-bold shadow-md ' 
                  onClick={handleOpen}>
                    Dropdown
                    </button>
                  {open ? (
                    <ul className="menu">
                      <li className="menu-item">
                       {user.type === "business" ?   <button >
                  BookNow </button> : " "} 
                      </li>
                      <li className="menu-item">
                        <button onClick={logout} >
                          Logout</button>
                      </li>
                      {/* <li className="menu-item">
                        <button  >
                          Eit Profile</button>
                      </li> */}
                    </ul>
                  ) : null}
                </div>

              </div>
            </div>
            <div className="pt-4 flex justify-evenly gap-20">
              <span className="text-sm font-semibold">{post.length} posts</span>
              <span className="text-sm font-semibold">5 booked</span>
              
            </div>
            <div className="pt-6 grid">
              <span className="text-lg font-semibold">DIscription</span>
              <span>S</span>
            </div>

          </div>
        </div>

      </div>
      <div className="pt-4 bg-gray-300"></div>
      <div className="border border-gray-400 bg-black"></div>
      <div className="pt-3 flex justify-center items-center bg-gray-300">
        <div className="flex space-x-4">
          <span className="font-semibold text-ms">Posts</span>
        </div>
      </div>

      <div className="pt-6 pl-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   items-center justify-evenly bg-gray-300">
        {
          post.map((data, index) => (
            <div key={index} className="flex w-[90%] justify-center pb-3 ">
              <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                <span>
                  <img className="w-80 h-60" src={data.image} alt="Mountain" />
                </span>

                <div className="font-bold text-xl mb-2 pl-3 ">{data.disription}</div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Likes {data.likes.length}</span>
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </div >
  )
}

export default UserProfile
