import React, { Component } from "react";
// import Highcharts from "highcharts";
// import Exporting from "highcharts/modules/exporting";
// import HichartsOfflineExporting from "highcharts/modules/offline-exporting";
import Select from "react-select";
import BarChart from "../Chart/BarChart";
// Exporting(Highcharts);
// HichartsOfflineExporting(Highcharts);

export default class TestChart extends Component {
    state ={
        selectedDimension: 'X Axis',
        selectedMeasure: 'Y Axis',
    }
    handleDimension = (selectedDimension) => {
        this.setState({ selectedDimension });
        console.log(`dimension selected:`, selectedDimension);
      }
      handleMeasure = (selectedMeasure) => {
        this.setState({ selectedMeasure });
        console.log(`measure selected:`, selectedMeasure);
      }
  static defaultProps = {
    data: {
      id: "test",
      title: "Title goes here",
      legend: {
        enabled: false
      },
      type: "column",
      height: 230,
      Xaxis: ["A", "B", "C", "D", "E", "F"],
      plotOptions: {
        series: {
          pointPadding: 0,
          groupPadding: 0.1
          // pointWidth: data.plotOptions.series.pointWidth,
        },
        column: {
          pointWidth: "50"
        }
      },
      data: [
        {
          name: "",
          data: [49.9, 71.5, 106.4, 129.2, 144.0],
          color: "#ef924b"
        }
      ]
    }
  };
//   handleView = () => {

//   }

  render() {
    const barData = {
        id: "chart_id",
        title: "Title goes here",
        legend: {
          enabled: false
        },
        type: "column",
        height: 350,
        Xaxis: ["A", "B", "C", "D", "E", "F"],
        xlabel : this.state.selectedDimension.label,
        ylabel : this.state.selectedMeasure.label,
        plotOptions: {
          series: {
            pointPadding: 0,
            groupPadding: 0.1
            // pointWidth: data.plotOptions.series.pointWidth,
          },
          column : {
              pointWidth : '50'
          }
        },
        data: [
          {
            name: "",
            data: [49.9, 71.5, 106.4, 129.2, 144.0],
            color: "#3E8DE8"
          }
        ]
      };
    const filter = [
      { value: "division", label: "Division" },
      { value: "market", label: "Market" },
      { value: "grade", label: "Grade" },
      { value: "region", label: "Region" },
      { value: "store", label: "Store" }
    ];
    const dimensions = [
      { value: "division", label: "Division" },
      { value: "market", label: "Market" },
      { value: "grade", label: "Grade" },
      { value: "region", label: "Region" },
      { value: "store", label: "Store" },
      { value: "job", label: "Job Family" },
      { value: "ftpttemp", label: "FT/PT/Temp" }
    ];
    const measures = [
      { value: "hc", label: "Headcount" },
      { value: "exits", label: "Exits" },
      { value: "turnover", label: "Turnover" },
      { value: "hires", label: "Hires" },
      { value: "abpt", label: "AB PT Turnover" }
    ];
    const { id } = this.props.data;
    console.log('dimension values : ', dimensions.values)
    console.log('dimensions : ', dimensions)
    return (
      <div className="row">
        <div className="col-4">
          Dimensions
          <Select
            options={dimensions}
            onChange={this.handleDimension}
            className="basic-multi-select"
            classNamePrefix="select"
            // isMulti
            placeholder="Dimensions"
            multiple
          />
        </div>
        <div className="col-4">
          Measures
          <Select
            options={measures}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange = {this.handleMeasure}
            isMulti
            placeholder="Measures"
            multiple
          />
        </div>
        <div className="col-4">
          Filter
          <Select
            options={filter}
            className="basic-multi-select"
            classNamePrefix="select"
            isMulti
            placeholder="Apply Filter"
            multiple
          />
        </div>
        <BarChart data={barData}/>
      </div>
    );
  }
}
