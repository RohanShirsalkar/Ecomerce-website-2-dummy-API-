import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { loginUser } from '../../redux/actions/user_action'

export default function Signup_Page() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch()
    const data = useSelector(state => state)
    const userData = {
        userName: userName,
        email: email,
        password: password,
    }

    const handleClick = () => {
        dispatch(loginUser(userData))
    }

    console.log(data)
    return (
        <div className='w-50 mx-auto p-3'>
            <h3 className='fw-light'>User Sign-up</h3>
            <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <input value={userName} onInput={e => setUserName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="firstNameHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
                <input value={password} onInput={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                {/* {data.user.status === 400 ? <span className='text-danger'>*{data.user.data.message}</span> : ""} */}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input value={email} onInput={e => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1" />
                {/* {data.user.status === 400 ? <span className='text-danger'>*{data.user.data.message}</span> : ""} */}
            </div>
            <button type="submit" onClick={handleClick} className="btn btn-dark">Submit</button>
        </div>
    )
}
