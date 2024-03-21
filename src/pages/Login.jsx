import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Uey Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign in</button>
                </form>
                <p>No account? Register</p>
            </div>
        </div>
    )
}

export default Login;