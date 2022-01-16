import React from "react";
import Navbar from "../navbar/Navbar";
import "./History.css";
import {Chart as chartjs} from "chart.js/auto"
import {Line} from "react-chartjs-2";


const state = {
  labels: [
    "Januari",
    "Febuari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ], //BULAN
  datasets: [
    {
      label: "BMI CHART",
      data: [
        18,
        17.4,
        18.1,
        18,
        18.3,
        18.4,
        18.6,
        19,
        19.1,
        19.5,
        20,
        20.5, //Kalkulasi BMI
      ],

      borderColor: ["rgb(255, 99, 132)"],
      borderWidth: 1,
    },
  ],
};

function History() {
  return (
    <div>
      <Navbar />
      <h1 className="center paddingTop-80">BMI HISTORY</h1>
      <div className="chart">
        <Line
          // datasetIdKey="id"
          data={state}
        />
      </div>
    </div>
  );
}

export default History;
