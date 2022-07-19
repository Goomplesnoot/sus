import React from "react";

function SignIn() {
return (
    <div>
    <div className="App">
        <div className="inputDiv">
        <input type="email" placeholder="Email" className = "emailInput"/> <br/>
        <input type="password" placeholder="Password" className = "passwordInput"/><br/>
        <button className="loginButton">Login</button>
        < hr/> <br/>
        <a href="./SignUp">
        <button className="signUpButton">SignUp</button>
        </a>
        </div>
    </div>
    </div>
  );
}

export default SignIn