import * as React from "react";
import { Bar, ChartData } from "react-chartjs-2";

export default function BarGraph(): JSX.Element {
  const data: ChartData<Chart.ChartData> = {
    datasets: [
      {
        backgroundColor: "#83B1E5",
        borderColor: "#83B1E5",
        borderWidth: 1,
        data: [15, 3, 4, 8, 5],
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        label: "Songs Played",
        showLine: false
      }
    ],
    labels: ["Hip-Hop", "R&B", "EDM", "House", "Electronica"]
  };
  return (
    <Bar
      data={data}
      width={50}
      height={25}
      options={{
        maintainAspectRatio: true,
        title: {
          fontSize: 50
        }
      }}
    />
  );
}
