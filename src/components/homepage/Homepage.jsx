import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Homepage.css";
import info from "./BMI_Info.png";

function Homepage() {
  //JS

  useEffect(() => {
    var canvas = document.getElementById('chartCanvas')
    var context = canvas.getContext('2d')

    context.lineWidth = 40
    context.font = "12px Calibri"

    // line underweight
    context.beginPath()
    context.strokeStyle = "#4CF1FC"
    context.lineCap = "round"
    context.moveTo(50,50)
    context.lineTo(140,50)
    context.stroke()
    context.closePath()
    context.fillText("Underweight", 55, 54)

    // line obese
    context.beginPath()
    context.strokeStyle = "#FA3333"
    context.lineCap = "round"
    context.moveTo(360,50)
    context.lineTo(450,50)
    context.stroke()
    context.closePath()
    context.fillText("Obese", 398, 54)

    // line normal
    context.beginPath()
    context.strokeStyle = "#55FB3B"
    context.lineCap = "butt"
    context.moveTo(140,50)
    context.lineTo(250,50)
    context.stroke()
    context.closePath()
    context.fillText("Normal", 178, 54)

    // line overweight
    context.beginPath()
    context.strokeStyle = "#FBE83B"
    context.lineCap = "butt"
    context.moveTo(250,50)
    context.lineTo(360,50)
    context.stroke()
    context.closePath()
    context.fillText("Overweight", 278, 54)
  })

  const [age, setAge] = React.useState("");
  const [height, setHeight] = React.useState("");
  var gender = "";
  const [weight, setWeight] = React.useState("");
  var bmi = 0;

  const updateTime = (time) => {
    console.log("masuk")
    var month = time.toLocaleString('default', {month: 'long'})
    var date = time.getDate()
    var ordinal
    if (date > 3 && date < 21) ordinal = "th"
    else if (date % 10 == 1) ordinal = "st"
    else if (date % 10 == 2) ordinal = "nd"
    else if (date % 10 == 3) ordinal = "rd"
    else ordinal = "th"
    var hour = time.getHours()
    var minute = time.getMinutes()
    var timeFormat = "AM"
    if (hour > 12) {
        hour -= 12
        timeFormat = "PM"
    }
    if(hour < 10) {
      hour = "0" + hour
    }
    if(minute < 10) {
      minute = "0" + minute
    }
    
    document.getElementById("update-time").innerHTML = "Last Updated : " + month + " " + date + ordinal + " " + time.getFullYear() + " at " + hour + "." + minute + " " + timeFormat
  }

  const validate = (age, height, weight) => {
    if(age == "") {
        alert("Age must be filled")
        return 0
    }
    if(document.getElementById('male').checked) {
      gender = "Male"
    }
    else if(document.getElementById('female').checked) {
      gender = "Female"
    }
    else {
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
}

  const getBMIStatus = (bmi) => {
    if(bmi < 18.5) return "Underweight"
    else if(bmi >= 18.5 && bmi <= 24.9) return "Normal Weight"
    else if(bmi >= 25 && bmi <= 29.9) return "Overweight"
    else if(bmi > 29.9) return "Obese"
  }

  const calculate = (e) => {
    if(validate(age, height, weight) == 0) return false
    const heightM = height / 100;
    var bmi = Math.round((weight / (heightM * heightM)) * 10) / 10;
    document.getElementById("BMI").value = bmi;
    return bmi;
  };

  const update = (e) => {
    if(validate(age, height, weight) == 0) return false
    const heightM = height / 100;
    var bmi = Math.round((weight / (heightM * heightM)) * 10) / 10;
    document.getElementById("BMI").value = bmi;

    var time = new Date()
    updateTime(time)
    document.getElementById("bmi-score").innerHTML = bmi
    document.getElementById("bmi-status").innerHTML = getBMIStatus(bmi)
    document.getElementById("age-data").innerHTML = age
    document.getElementById("gender-data").innerHTML = gender
    updateChart(bmi)
    return bmi;
  };

  const updateChart = (bmi) => {
    var canvas = document.getElementById('chartCanvas')
    var context = canvas.getContext('2d')
    var x = 0

    context.clearRect(0, 70, 550, 30)
    if(bmi < 18.5) {
        x = ((90 * bmi) / 18.4) + 50
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        x = ((110 * (bmi - 18.5)) / 6.4) + 140
    }
    else if(bmi >= 25 && bmi <= 29.9) {
        x = ((110 * (bmi - 25)) / 4.9) + 250
    }
    else if(bmi > 29.9) {
        x = ((90 * (bmi - 29.9)) / 25.1) + 360
    }

    context.beginPath()
    context.fillStyle = "#838383"
    context.lineCap = "square"
    context.moveTo(x,70)
    context.lineTo(x - 10,90)
    context.lineTo(x + 10,90)
    context.closePath()
    context.fill()
  }

  const showOverlay = () => {
    document.getElementById("overlay").style.width = "100%"
    document.getElementById("info-overlay").style.height = "500px"
    document.getElementById("close-icon").style.height = "24px"
    window.scroll(0, 0)
    document.body.style.overflow = "hidden"
  }

  const closeOverlay = () => {
    document.getElementById("overlay").style.width = "0%"
    document.getElementById("info-overlay").style.height = "0px"
    document.getElementById("close-icon").style.height = "0px"
    document.body.style.overflow = "visible"
  }

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
                  <div class="radio-container">
                      <input type="radio" name="gender" id="male" value="male"></input>
                      <label for="male" id="male_label">Male</label> <br id="gender-br"></br>
                      <input type="radio" name="gender" id="female"></input>
                      <label for="male">Female</label>
                  </div>
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
                    <label className="font-20" for="BMI">BMI Score</label>
                    <input type="button" value="Info" className="small-btn" onClick={showOverlay}/>
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
                    onClick={update}
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
            <span className="material-icons-outlined" onClick={closeOverlay}>
              close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
