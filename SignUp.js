import React, { useState } from "react"
import Axios from 'axios'

function SignUp(){

    const[fname, setFname] = useState('')
    const[lname, setLname] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

const submitInfo = ()=>{
    Axios.post("http://localhost:5500/api/insert",{
        fname:fname,
        lname:lname,
        email:email,
        password:password
    }).then(()=> {
        alert("succesful insert")
    })
}
    return(
        <div className="App">
            <h1>Sign Up</h1>

            <div>
                <label>First Name  </label>
                <input className="signup"
                type="text"
                name="fname"
                onChange={(e)=>{
                    setFname(e.target.value)
                }}
                /><br/>

                <label>Last Name  </label>
                <input className="signup"
                type="text"
                name="lname"
                onChange={(e)=>{
                    setLname(e.target.value)
                }}
                /><br/>

                <label>Email  </label>
                    <input className="signup"
                        type="email"
                        name="email"
                        onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                /><br/>

                <label>Password   </label>
                    <input className="signup"
                        type="password"
                        name="password"
                        onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                /><br/>
                    <button onClick={submitInfo} className="submitButton">Submit</button>
            </div>

        </div>
    )
}

export default SignUp;