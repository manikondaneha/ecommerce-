import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
export default function Signup() {
    console.log(process.env.REACT_APP_BACKEND_URL)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    function signUp() {
        const newUser = { name, email, password, mobile }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`, newUser)
            .then((res) => {
                console.log(res)
            })
    }
    return (
        <div className='signup-container'>
            <div className='form-group'>
                <label>Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Mobile Number</label>
                <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)} />
            </div>
            <button onClick={signUp}>Signup</button>
        </div>
    )
}
