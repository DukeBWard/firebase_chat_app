import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Uey Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input style = {{display:"none"}} type="file" id="file" />  
                    <label htmlFor="file">
                        <img src={Add}/>
                        <span>Add profile picture</span>    
                    </label> 
                    <button>Sign Up</button>
                </form>
                <p>You have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;