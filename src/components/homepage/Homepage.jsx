import React from "react";
import Navbar from "../navbar/Navbar";
import "./Homepage.css";
import info from "./BMI_Info.png";

function Homepage() {
  //JS

  const [age, setAge] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [weight, setWeight] = React.useState("");
  var bmi = 0;

  const validate = (e) => {
    if(age == "") {
        alert("Age must be filled")
        return 0
    }
    if(gender == "") {
        alert("Please choose a gender")
        return 0
    }
    if(height == "") {
        alert("Height must be filled")
        return 0
    }
    if(weight == "") {
        alert("Weight must be filled")
        return 0
    }
    return 1
  };

  const calculate = (e) => {
    if(validate == 0) return false
    const heightM = height / 100;
    var bmi = Math.round((weight / (heightM * heightM)) * 10) / 10;
    document.getElementById("BMI").value = bmi;
    return bmi;
  };

  return (
    <div>
      <Navbar />
      <div className="section-container">
        <div className="content">
          <h1>My Personal BMI Information</h1>
          <p id="update-time">Last Updated : October 29th 2021 at 13.41 PM</p>
          <ul>
            <li>BMI Score</li>
            <hr className="long-hr" />
            <h1 id="bmi-score">20.1</h1>
            <li>BMI Status</li>
            <hr className="long-hr" />
            <h2 id="bmi-status">Normal Weight</h2>
            <li>Age</li>
            <hr className="short-hr" />
            <h2 id="age-data">19</h2>
            <li>Gender</li>
            <hr className="short-hr" />
            <h2 id="gender-data">Male</h2>
            <li>BMI Chart</li>
          </ul>
          <canvas id="chartCanvas" width="550" height="100"></canvas>
        </div>
        <div>
          <div className="form-container">
            <form action="" id="bmi-form">
              <div className="form-field-container">
                <div className="form-group">
                  <label for="age">Age</label>
                  <input
                    type="text"
                    name=""
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="gender">Gender</label>
                  <input
                    type="text"
                    name=""
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="height">Height (cm)</label>
                  <input
                    type="text"
                    name=""
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="weight">Weight (kg)</label>
                  <input
                    type="text"
                    name=""
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="form-group bmi-result">
                  <div>
                    <label for="BMI">BMI Score</label>
                    <span
                      className="material-icons-outlined md-18"
                      onClick="showOverlay()"
                    >
                      info
                    </span>
                  </div>
                  <input type="text" name="" id="BMI" />
                </div>
                <div className="btn-container">
                  <input
                    type="button"
                    value="Calculate"
                    className="btn green-btn"
                    onClick={calculate}
                  />
                </div>
                <div className="btn-container">
                  <input
                    type="button"
                    value="Update"
                    className="btn white-btn"
                    onClick="updateData()"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="overlay" className="info-overlay">
        <div className="content-overlay">
          <img id="info-overlay" src={info} alt="BMI Score Information" />
          <div id="close-icon">
            <span className="material-icons-outlined" onClick="closeOverlay()">
              close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
