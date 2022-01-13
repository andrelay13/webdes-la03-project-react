import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Homepage.css"
import info from "./BMI_Info.png"

function Homepage() {
    //JS
// var canvas = document.getElementById('chartCanvas')
// var context = canvas.getContext('2d')

// context.lineWidth = 40
// context.font = "12px Calibri"

// // line underweight
// context.beginPath()
// context.strokeStyle = "#4CF1FC"
// context.lineCap = "round"
// context.moveTo(50,50)
// context.lineTo(140,50)
// context.stroke()
// context.closePath()
// context.fillText("Underweight", 55, 54)

// // line obese
// context.beginPath()
// context.strokeStyle = "#FA3333"
// context.lineCap = "round"
// context.moveTo(360,50)
// context.lineTo(450,50)
// context.stroke()
// context.closePath()
// context.fillText("Obese", 398, 54)

// // line normal
// context.beginPath()
// context.strokeStyle = "#55FB3B"
// context.lineCap = "butt"
// context.moveTo(140,50)
// context.lineTo(250,50)
// context.stroke()
// context.closePath()
// context.fillText("Normal", 178, 54)

// // line overweight
// context.beginPath()
// context.strokeStyle = "#FBE83B"
// context.lineCap = "butt"
// context.moveTo(250,50)
// context.lineTo(360,50)
// context.stroke()
// context.closePath()
// context.fillText("Overweight", 278, 54)

// // arrow
// context.beginPath()
// context.fillStyle = "#838383"
// context.lineCap = "square"
// context.moveTo(250,70)
// context.lineTo(240,90)
// context.lineTo(260,90)
// context.closePath()
// context.fill()
    //
    return (
        <div>
            <Navbar/>
            <div className="section-container">
        <div className="content">
            <h1>My Personal BMI Information</h1>
            <p id="update-time">Last Updated : October 29th 2021 at 13.41 PM</p>
            <ul>
                <li>BMI Score</li>
                <hr className="long-hr"/>
                <h1 id="bmi-score">20.1</h1>
                <li>BMI Status</li>
                <hr className="long-hr"/>
                <h2 id="bmi-status">Normal Weight</h2>
                <li>Age</li>
                <hr className="short-hr"/>
                <h2 id="age-data">19</h2>
                <li>Gender</li>
                <hr className="short-hr"/>
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
                            <input type="text" name="" id="age"/>
                        </div>
                        <div className="form-group">
                            <label for="gender">Gender</label>
                            <input type="text" name="" id="gender"/>
                        </div>
                        <div className="form-group">
                            <label for="height">Height (cm)</label>
                            <input type="text" name="" id="height"/>
                        </div>
                        <div className="form-group">
                            <label for="weight">Weight (kg)</label>
                            <input type="text" name="" id="weight"/>
                        </div>
                        <div className="form-group bmi-result">
                            <div>
                                <label for="BMI">BMI Score</label>
                                <span className="material-icons-outlined md-18" onclick="showOverlay()">info</span>
                            </div>
                            <input type="text" name="" id="BMI"/>
                        </div>
                        <div className="btn-container">
                            <input type="button" value="Calculate" className="btn green-btn" onclick="calculateBMI()"/>
                        </div>
                        <div className="btn-container">
                            <input type="button" value="Update" className="btn white-btn" onclick="updateData()"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="overlay" className="info-overlay">
        <div className="content-overlay">
            <img id="info-overlay" src={info} alt="BMI Score Information"/>
            <div id="close-icon">
                <span className="material-icons-outlined" onclick="closeOverlay()">close</span>
            </div>
        </div>
    </div>

        </div>
    )
}

export default  Homepage
