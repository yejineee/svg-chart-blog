import React from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import Label from "./components/AxisLabel";
import ChartTitle from "./components/ChartTitle";

const data = [
  { label: "11/01", y: 0 },
  { label: "11/04", y: 4000 },
  { label: "11/8", y: 300 },
  { label: "11/12", y: 100 },
  { label: "11/16", y: 400 },
  { label: "11/20", y: 500 },
  { label: "11/24", y: 0 },
  { label: "11/30", y: 0 },
];

const styles = {
  chartComponentsContainer: {
    display: "grid",
    gridTemplateColumns: "max-content 700px",
    alignItems: "center",
  },
  chartWrapper: { maxWidth: 700, alignSelf: "flex-start" },
};

function App() {
  return (
    <div style={styles.chartComponentsContainer}>
      <div />
      <ChartTitle text="Movements per Day of the Week" />
      <Label text="Movements" rotate />
      <div style={styles.chartWrapper}>
        <LineChart
          width={500}
          height={300}
          data={data}
          horizontalGuides={5}
          precision={2}
          verticalGuides={1}
        />
      </div>
      <div />
      <Label text="Days of the Week" />
    </div>
  );
}

export default App;
