import React from "react";
import "./Login.css";

// let user = {
//     "username": "admin",
//     "email": "admin",
//     "password": "admin"
// }

function Login() {
 
const [user, setuser] = React.useState("");
const [password, setpassword] = React.useState("")
const [error, seterror] = React.useState(false)


const userAdmin = "admin",
passwordAdmin = "admin";

const login = (e) => {
    if(user != userAdmin || password != passwordAdmin){
        e.preventDefault();
        alert("Wrong credentials")
    }else{

    }
}

  return (
    <div>
      <div className="parent">
        <div className="welcome">
          <div className="welcome-content">
            Hi, welcome to BMI Advisor! <br />
            Please login first to use BMI Advisor
          </div>
        </div>
        <div className="form-section">
          <div className="form">
            <div className="judul">LOGIN</div>
            <form action="/home" id="form-content" 
            onSubmit={login}
            >
              <div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={user}
                  onChange={(e) => setuser(e.target.value)}
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>
              <div className="center">
              <span className="donthaveaccount">Don't have account? </span>
              <a href="register.html">Register Here</a>
              </div>
              <button
                type="submit"
                id="submit2"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
