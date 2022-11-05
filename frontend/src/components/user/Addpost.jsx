import axios from 'axios'
import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../../url'
import { BiCloudUpload } from 'react-icons/bi'
import { useEffect } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

function Addpost() {
    const [image, setImage] = useState('')
    const [discription, setDiscription] = useState('')
    const [user, setUser] = useState('')
    const [showModal, setShowModal] = useState(false);
    const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);


    const onImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0])
        }
    }

    const close = async (e) => {
        setImage('')
        setDiscription('')
        setShowModal(false)
    }

    const submit = async (e) => {
        e.preventDefault()
        let user = JSON.parse(localStorage.getItem('loginInfo'))
        setUser(user)
        console.log(user);
        const userid = user._id;
        const formdata = new FormData()

        formdata.append('image', image)
        formdata.append('disription', discription)
        formdata.append('userid', userid)
        console.log(formdata.get('image'));

        const config = {
            header: {
                "Content-Type": "multipart/form-data"
            }
        }
        await axios.post(`${API}/add-post`,
            formdata,
            config
        )
        setImage('')
        setDiscription('')
        setShowModal(false)
        forceUpdate();
    }


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('loginInfo'))
        setUser(user)

    }, [reducerValue])
    return (
        <div>


            <button
                type="button"
                onClick={() => setShowModal(true)}
            >
                <BiCloudUpload size={40} />
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-[30rem] my-6 mx-auto max-w-5xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="shrink-0 flex">
                                      <img className="h-16 w-16 object-cover rounded-full" src={user.image} alt="photo" /> NEW POST
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div classNameName='w-11/12 h-auto pl-16 '>
                                        <textarea className="flex justify-center bg-gray-200 h-10 rounded w-80 text-black"
                                            name="disription"
                                            value={discription}
                                            placeholder=" Discription...."
                                            onChange={(e) => { setDiscription(e.target.value) }}
                                        />

                                        <form className="flex justify-evenly items-center space-x-6" onSubmit={submit}>


                                            <label className="block">
                                                <span className="sr-only">Choose profile photo</span>
                                                <input type="file" name="image" className=" block w-full text-sm text-blsck
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100"
                                                    onChange={onImage}
                                                />
                                            </label>


                                            {/* <div className='text-red-700 flex gap-6 justify-end pr-16'>

                                                <button type='submit' className="bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                                    POST
                                                </button>

                                            </div> */}
                                        </form>

                                        {/* {image ? <button onClick={(e) => { setImage('') }} class="bg-rose-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Delete
                                        </button> : ""} */}

                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                                    <div>
                                        {image && < span className='relative' >
                                            <img src={URL.createObjectURL(image)} alt="" />
                                        </span>}
                                    </div>
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={close}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={submit}
                                    >
                                        <FaTelegramPlane />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

            {/* v
       {user.type == "business" ?
                <div classNameName='flex flex-row'>


                    <div classNameName='w-full rounded-xl bg-gray-200 py-2 h-28'>

                       


                    </div >

                </div >
                  : ""}
                  l */}

        </div>
    )
}

export default Addpost
