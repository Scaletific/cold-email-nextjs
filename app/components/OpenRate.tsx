// Extend the Window interface to include 'myLine'
declare global {
  interface Window {
    myLine: Chart;
  }
}

import React from "react";
import Chart from "chart.js";

export default function OpenRate() {
  React.useEffect(() => {
    const config: Chart.ChartConfiguration = {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: String(new Date().getFullYear()), // Current year
            backgroundColor: "rgba(49, 130, 206, 0.2)", // Light blue gradient
            borderColor: "#3182ce", // Blue border
            pointBackgroundColor: "#3182ce", // Blue points
            pointBorderColor: "#ffffff", // White point borders
            pointHoverBackgroundColor: "#ffffff", // Hover effect for points
            data: [65, 78, 66, 44],
            fill: true, // Enable filling the area under the line
            lineTension: 0.3, // Smoothing effect on the line
          },
          {
            label: String(new Date().getFullYear() - 1), // Previous year
            backgroundColor: "rgba(237, 242, 247, 0.2)", // Light grey gradient
            borderColor: "#edf2f7", // Grey border
            pointBackgroundColor: "#edf2f7", // Grey points
            pointBorderColor: "#ffffff", // White point borders
            pointHoverBackgroundColor: "#ffffff", // Hover effect for points
            data: [40, 68, 86, 74],
            fill: true,
            lineTension: 0.3,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
          backgroundColor: "#333",
          titleFontColor: "#fff",
          bodyFontColor: "#fff",
          borderColor: "#fff",
          borderWidth: 1,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              gridLines: {
                display: false,
                color: "rgba(33, 37, 41, 0.3)",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
                maxTicksLimit: 4, // Limit to 4 ticks
                beginAtZero: true,
              },
              gridLines: {
                color: "rgba(255, 255, 255, 0.15)",
                borderDash: [3],
              },
            },
          ],
        },
        animation: {
          duration: 1500, // Animation duration in ms
          easing: "easeInOutQuad", // Smooth transition
        },
      },
    };

    const ctx = (
      document.getElementById("line-chart") as HTMLCanvasElement
    ).getContext("2d");
    if (ctx) {
      window.myLine = new Chart(ctx, config);
    }

    return () => {
      if (window.myLine) {
        window.myLine.destroy(); // Cleanup on component unmount
      }
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full sm:w-2/4 mb-6 shadow-lg rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-400 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">Open Rates</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-64">
            {" "}
            {/* Reduced height */}
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
