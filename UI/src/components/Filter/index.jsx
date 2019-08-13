import React, { Component } from "react";
// import Highcharts from "highcharts";
// import Exporting from "highcharts/modules/exporting";
// import HichartsOfflineExporting from "highcharts/modules/offline-exporting";
import Select from "react-select";
import BarChart from "../Chart/BarChart";
import "./style";
// Exporting(Highcharts);
// HichartsOfflineExporting(Highcharts);

export default class Filter extends Component {
  state = {
    selectedDimension: "X Axis",
    selectedMeasure: "Y Axis"
  };
  handleDimension = selectedDimension => {
    this.setState({ selectedDimension });
    console.log(`dimension selected:`, selectedDimension);
  };
  handleMeasure = selectedMeasure => {
    this.setState({ selectedMeasure });
    console.log(`measure selected:`, selectedMeasure);
  };
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
      xlabel: this.state.selectedDimension.label,
      ylabel: this.state.selectedMeasure.label,
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
    console.log("dimension values : ", dimensions.values);
    console.log("dimensions : ", dimensions);
    return (
      <div className="filter">
        <p>
          <button
            className="col-3 btn btn-default"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            <h4>1</h4>
            Filter
          </button>
          <button
            className="col-3 btn btn-default"
            type="button"
            data-toggle="collapse"
            data-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            <h4>2</h4>
            Select
          </button>
          <button
            className="col-3 btn btn-default"
            type="button"
            data-toggle="collapse"
            data-target="#multiCollapseExample3"
            aria-expanded="false"
            aria-controls="multiCollapseExample3"
          >
            <h4>3</h4>
            View
          </button>
          <button
            className="col-3 btn btn-default"
            type="button"
            data-toggle="collapse"
            data-target="#multiCollapseExample4"
            aria-expanded="false"
            aria-controls="multiCollapseExample4"
          >
            <h4>4</h4>
            Access
          </button>
        </p>



        <div className="row">
          <div className="col-12">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                <div className="filter-body">
                  <div className="col-4 fields">
                    Fields
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa fa-search" aria-hidden="true" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-4 selected">Selected</div>
                  <div className="col-4 applied">Applied</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                <div className="filter-body">
                  <div className="col-6 selected">Selected</div>
                  <div className="col-6 applied">Applied</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="card card-body">
                In Progress
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="collapse multi-collapse" id="multiCollapseExample4">
              <div className="card card-body">
              In Progress  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* 
  .accordion {
  display: inline-flex;
  border: 2px solid rgba(0, 0, 0, 0.125);
  
  .card-header {
    background-color: #78b9e5;
    margin-right: -15px;
    margin-left: -15px;
  }

  h4 {
    display: inline-flex;
    font-weight: bold;
    font-size: 40px;
    opacity: 0.4;
    color: white;
  }
}
  
  <div className="accordion col-12" id="accordionExample">
          <div className="card col-3">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <h4>1</h4>
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Filter
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <i className="fa fa-search" aria-hidden="true"/>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="row">
                  <div className="col-4">P1</div>
                  <div className="col-4">P2</div>
                  <div className="col-4">P3</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card  col-3">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <h4>2</h4>
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Select
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
              </div>
            </div>
          </div>
          <div className="card  col-3">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <h4>3</h4>
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  View
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
              </div>
            </div>
          </div>
          <div className="card  col-3">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <h4>4</h4>
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  {" "}
                  Access
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
              </div>
            </div>
          </div>
        </div> */
}
