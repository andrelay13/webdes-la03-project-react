import React from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

function Register() {
    return (
        <div>
            <div className="user">
            <header className="user__header">
                <p className="welcome">Hi, welcome to BMI Advisor!</p>
                <p className="subwelcome">Please register first to use BMI Advisor service</p>
            </header>

            <form id="register-form">
                <div className="container">
                <p className="textreg">Register</p>
                <input type="text" id="user" name="user" placeholder="Username"/>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <input type="text" id="pw" name="pw" placeholder="Password"/>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"/>
                <p className="acc">Already have an account? <Link to={"/"}>Login Here</Link></p>
                <button type="submit" id="registerBtn" className="registerbtn">Register</button>
                </div>
            </form>
            
            <button type="submit" className="googlebtn">
                <img className="gicon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>Register with Google
            </button>
        </div>
        </div>
    )
}

export default Register
