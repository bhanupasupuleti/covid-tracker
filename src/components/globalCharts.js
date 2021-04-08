import React from "react";
import { Line, Bar } from "react-chartjs-2";
import ScrollIntoView from 'react-scroll-into-view'

const GlobalCharts = ({ country, stats,lineChartData }) => {
  const LineChart =
    lineChartData.length > 0 ? (
      <Line
        data={{
          labels: lineChartData.map((daily) => daily.reportDate),
          datasets: [
            {
              data: lineChartData.map((daily) => daily.confirmed.total),
              label: "Global Infected",
              borderColor: "#16a085",
              fill: true,
            },
            {
              data: lineChartData.map((daily) => daily.deaths.total),
              label: "Global Deaths",
              borderColor: "#2ecc71",
              fill: true,
            },
            {
              data: lineChartData.map((daily) => daily.confirmed.china),
              label: "China Infected",
              borderColor: "#e74c3c",
              fill: true,
            },
            {
              data: lineChartData.map((daily) => daily.deaths.china),
              label: "China Deaths",
              borderColor: "#9b59b6",
              fill: true,
            },
          ],
        }}
      ></Line>
    ) : null;

  const { confirmed, recovered, deaths } = stats;

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recoverd", "Died"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#16a085", "#2ecc71", "#e74c3c"],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <ScrollIntoView selector=".chart--container">
      <div className="chart--container">{
        country?BarChart:LineChart}
      </div>
    </ScrollIntoView>
  );
};

export default GlobalCharts;