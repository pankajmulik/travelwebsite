import React, { useState } from 'react'
import Navbar from '../home/Navbar'
import registration from '../../lotte/assests/registration.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
const Signup = () => {

    const [userName, setusername] = useState('')
    const [fullName, setfullName] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setConfirmpass] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')
    const [email, setemail] = useState('')
    const [showpass, setshowpass] = useState(false)

    const register = (e) => {
        e.preventDefault();
        validates();
        if (!validate) {
            throw Error
            return false;
        }
    }

    const validates = () => {
        

        const nameRegex = /^[a-zA-Z\s'-]+$/;
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        const mobileRegex = /^[6-9]\d{9}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Validate each field
        if (!nameRegex.test(fullName)) {
            alert('Invalid full name');
            return false;
        }
        if (!usernameRegex.test(userName)) {
            alert('Invalid username');
            return false;
        }
        if (!mobileRegex.test(mobileNumber)) {
            alert('Invalid mobile number');
            return false;
        }
        if (!emailRegex.test(email)) {
            alert('Invalid email address');
            return false;
        }
        if (!passwordRegex.test(password)) {
            alert('Invalid password');
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }

        // All validations passed
        alert('Registration successful!');
        return true;
    };

    return (
        <div id='Signup' className='w-full ' >

            <div className="nav bg-green-400 " style={{ width: '100%' }}>
                <Navbar />
            </div>


            <div className='mt-4'>


                <div className="signupcontent grid md:grid-cols-2 md:w-full">


                    <div className="signupdata bg-white">

                        <div className="headng-signup text-center mt-8">
                            <h1 className='text-2xl text-slate-700  font-semibold'>
                                Signup
                            </h1>
                        </div>
<form action="#" onSubmit={register}>
                        <div className="signup-content mx-4 mt-5  shadow-2xl p-4">
                                <div>
                                    <h3 className='text-xl text-center p-2 m-2 text-slate-800'>Please fill the below details</h3>
</div>
                            <div className="input-field-div grid md:grid-cols-2">
                                <div className="user-label py-2">
                                    <label htmlFor="fullName" >Full Name :</label>
                                </div>
                                <div className="input-field my-2 border mr-4">
                                    <input type="text" name="fullName" id="fullName" placeholder='enter full name' className='p-2 w-full' onChange={(e) => setfullName(e.target.value)} />
                                </div>
                            </div>
                            <div className="input-field-div grid md:grid-cols-2 ">
                                <div className="user-label  py-2">
                                    <label htmlFor="email">Email :</label>
                                </div>
                                <div className="input-field my-2 border mr-4">
                                    <input type="email" name="email" id="email" placeholder='Enter email address' className='p-2 w-full' onChange={(e) => setemail(e.target.value)} />
                                </div>
                            </div>
                            <div className="input-field-div grid md:grid-cols-2">
                                <div className="user-label  py-2">
                                    <label htmlFor="userName">User Name :</label>
                                </div>
                                <div className="input-field border  my-2 mr-4">
                                    <input type="text" name="userName" id="userName" placeholder='Enter Your user name ' className='p-2 w-full' onChange={(e) => setusername(e.target.value)} />
                                </div>
                            </div>
                            <div className="input-field-div grid md:grid-cols-2">
                                <div className="user-label  py-2">
                                    <label htmlFor="mobileNumber">Mobile Number :</label>
                                </div>
                                <div className="input-field border my-2 mr-4">
                                    <input type="tel" name="mobileNumber" id="mobileNumber" maxLength={10} placeholder='Enter Mobile number' className='p-2 w-full' onChange={(e) => setmobileNumber(e.target.value)} />
                                </div>
                            </div>

                            <div className="input-field-div grid md:grid-cols-2">
                                <div className="user-label  py-2">
                                    <label htmlFor="password">Password :</label>
                                </div>
                                    <div className="input-field-div bg-white border-2  mr-4">
                                        <input type={showpass ? 'text' : 'password'} name='password' id='password' placeholder='enter Password' className='p-2'  style={{ width: '90%' }} />

                                        {
                                            showpass ? <button type='button' onClick={() => setshowpass(!showpass)}> <FontAwesomeIcon icon={faEyeSlash} /></button>
                                                : <button type='button' onClick={() => setshowpass(!showpass)}> <FontAwesomeIcon icon={faEye} /></button>

                                        }
                                    </div>
                            </div>

                            <div className="input-field-div grid md:grid-cols-2">
                                <div className="user-label  py-2">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                </div>
                                <div className="input-field my-2 border  mr-4">
                                    <input type="text" name="confirmPassword" id="confirmPassword" placeholder='confirm Password' className='p-2 w-full' onChange={(e) => setConfirmpass(e.target.value)} />
                                </div>
                            </div>
                            <div className='text-center m-4'>

                                <button type='submit' className='bg-red-400 p-2 rounded-2xl'>Register</button>
                            </div>

                                <div className="div-l m-2 text-right mr-4">
                                    Already have an account please <Link to='/login' className='text-blue-400'>  Login here</Link>
                                </div>
                            </div>
                            
                        </form>
          
                    </div>
                    <div className="signupdata " style={{height:'500px'}}>
                        <Lottie animationData={registration} loop={true} style={{height:'600px'}}>

                        </Lottie>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Signup