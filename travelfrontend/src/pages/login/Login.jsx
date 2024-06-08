import React, { useState } from 'react'
import Navbar from '../home/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lottie from 'lottie-react'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { Link, redirect } from 'react-router-dom'
import login from '../../lotte/assests/login.json'
import arrowani from '../../lotte/assests/arrowani.json'
import { useContext } from 'react'
import { userLoginContext } from '../../context/userLogoncontext'

const Login = () => {

    const {userstatus,setuserstatus}=useContext(userLoginContext)

    const [showpass, setshowpass] = useState(false)

    const [mobilelogin, setmobilelogin] = useState(false)

    const [sendotp, setsendotp] = useState(false)

    const validateotp = () => {
        console.log("otp")

    }

    const handlelogin=()=>{
        setuserstatus('Logout')
        
    }

    return (
        <div id='Login ' className='overflow-hidden w-full' style={{ width: '100%' }}>

            <Navbar />
            <div className="login-content grid  md:grid-cols-2 my-5 h-22" style={{ marginTop: '5%' }} >

                <div className="login-cred-div bg-slate-200   text-center shadow-lg mx-5">
                    <h1 className='m-4 text-2xl my-8' >
                        Login
                    </h1>


                    {
                        !mobilelogin && <>

                            <div className='input-div grid grid-cols-2 my-3 '>
                                <div className="label-div">
                                    <label htmlFor="username">UserName</label>
                                </div>
                                <div className="input-field-div mx-2">
                                    <input type='text' name='username' id='username' placeholder='enter username' className='p-2' style={{ width: '100%' }} />


                                </div>
                            </div>
                            <div className='input-div grid grid-cols-2'>
                                <div className="label-div py-2">
                                    <label htmlFor="password">Password :</label>
                                </div>
                                <div className="input-field-div bg-white border-2 mx-2">
                                    <input type={showpass ? 'text' : 'password'} name='password' id='password' placeholder='enter Password' className='p-2' style={{ width: '90%' }} />

                                    {
                                        showpass ? <button type='button' onClick={() => setshowpass(!showpass)}> <FontAwesomeIcon icon={faEyeSlash} /></button>
                                            : <button type='button' onClick={() => setshowpass(!showpass)}> <FontAwesomeIcon icon={faEye} /></button>

                                    }
                                </div>
                            </div>

                            <div className="input-div text-center">
                                <div className="login-btn-div ">
                                    <button className='bg-green-400 p-2 rounded-md m-3' onClick={handlelogin}>
                                        Login
                                    </button>
                                </div>
                            </div>



                            <div>
                                OR
                            </div>

                            <div className="mobileotpnav m-4">
                                <button onClick={() => setmobilelogin(true)} className='"py-2.5 px-5 me-2 p-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-yellow-600 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-900 dark:focus:ring-green-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"'>
                                    Login with Mobile Number
                                </button>
                            </div>
                        </>


                    }
                    {
                        mobilelogin && <>
                            <div className='input-div grid grid-cols-2 my-3 '>
                                <div className="label-div">
                                    <label htmlFor="mobileNumber">Mobile Number</label>
                                </div>
                                <div className="input-field-div mx-2">
                                    <input type='text' name='mobileNumber' id='mobileNumber' placeholder='enter Mobile number' maxLength={10} className='p-2' style={{ width: '100%' }} />


                                </div>

                                {

                                    sendotp && < ><div className="label-div my-2">
                                        <label htmlFor="mobileotp">Validate otp</label>
                                    </div>
                                        <div className="input-field-div m-2">
                                            <input type='text' name='mobileotp' id='mobileotp' placeholder='enter otp'
                                                maxLength={10} className='p-2' style={{ width: '100%' }} />


                                        </div>

                                        <div>

                                        </div>

                                        <div className='my-4'>
                                            <button className='btn bg-sky-950 p-3 rounded-xl text-white'
                                                onClick={validateotp}>
                                                Validate OTP
                                            </button>
                                        </div>
                                    </>

                                }

                            </div>
                            <div className="opt-div">
                                {
                                    !sendotp && <div>
                                        <button className='bg-blue-800 p-2 rounded-lg' onClick={() => setsendotp(true)}>
                                            Send Otp
                                        </button>
                                    </div>

                                }

                            </div>
                            <div className='my-5'>
                                OR
                            </div>
                            <div className="mobileotpnav m-4">




                                <button onClick={() => setmobilelogin(false)} className='"py-2.5 px-5 me-2 p-3 mb-2 text-sm font-medium
                                 text-gray-900 focus:outline-none bg-yellow-600 rounded-full border border-gray-200
                                 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-900
                                  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
                                   dark:hover:text-white dark:hover:bg-gray-700"'>
                                    login with password
                                </button>
                            </div>




                        </>

                    }




                    {/* <video controls width="100%">
                      <source src="src/video/Animation - 1716431195775.mp4" type="video/mp4" />
                      Sorry, your browser doesn't support videos.
                  </video> */}




                </div>
                <div className="login-cred-div shadow-lg ">


                    <div>
                        <Lottie animationData={login} loop={true} style={{ height: '300px' }}></Lottie>
                    </div>

                    <div className='text-center'>
                        dont have an account <br />
                        <button className='text-white bg-blue-300 m-2 rounded-lg p-2'>
                            <Link to='/signup' className='text-2xl border-black'>
                                Signup here
                                <Lottie animationData={arrowani} loop={true} style={{ height: '50px' }}></Lottie>
                            </Link>
                        </button>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Login