import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { useSelector } from 'react-redux/es/exports'
import { loginUser, setLogin } from '../../redux/actions/user_action'

export default function Login_Page() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const data = useSelector(state => state)

    const loginDetails = {
        username: userName,
        password: password,
    }

    const handleClick = () => {
        dispatch(loginUser(loginDetails))
    }

    // useEffect(() => {
    //     if(data.userData.token){
    //         dispatch(setLogin("true"))
    //     }
    // },[data])

    console.log(data.userData.status)


    return (
        <div className='w-50 mx-auto p-3'>
            <h3 className='fw-light'>User Login</h3>
                {data.userData.status === 400 ? <span className='text-danger'>*{data.userData.data.message}</span> : ""}
            <div className="mb-3 mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="text" value={userName} onInput={e => setUserName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onInput={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" onClick={handleClick} className="btn btn-dark">Submit</button>
        </div>
    )
}
