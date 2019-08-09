import React from "react";
import { Switch, Route } from "react-router-dom";

import "./style";

import Header from "components/Header";
import Chart from "components/TestChart";
import Dashboard from "scenes";
import TestChart from "../TestChart";



const barData = {
  id: "chart_id",
  title: "Title goes here",
  legend: {
    enabled: false
  },
  type: "column",
  height: 230,
  Xaxis: ["A", "B", "C", "D", "E", "F"],
  plotOptions: {
    series: {
      ointPadding: 0,
      groupPadding: 0.1
      // pointWidth: data.plotOptions.series.pointWidth,
    }
  },
  data: [
    {
      name: "",
      data: [49.9, 71.5, 106.4, 129.2, 144.0],
      color: "#ef924b"
    }
  ]
};

const barData2 = {
  id: "chart_id2",
  title: "Title goes here",
  legend: {
    enabled: false
  },
  type: "column",
  height: 230,
  Xaxis: ["A", "B", "C", "D", "E", "F"],
  plotOptions: {
    series: {
      ointPadding: 0,
      groupPadding: 0.1
      // pointWidth: data.plotOptions.series.pointWidth,
    }
  },
  data: [
    {
      name: "",
      data: [49.9, 71.5, 106.4, 129.2, 144.0],
      color: "#ef924b"
    }
  ]
};

const Root = props => {
  return (
    <div className="section">
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Root;
