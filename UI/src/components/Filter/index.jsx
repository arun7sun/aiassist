import React, { Component } from "react";
import BarChart from "../Chart/BarChart";
import "./style";
const data = require("./jsonfile.js");
import Select from "react-select";
import Table from "react-table";
import axios from "axios";
import _ from "lodash";
import ReactTable from "react-table";
import apiPaths from "../../apiPaths";

export default class Filter extends Component {
  state = {
    // filters: [
    //   { label: "HIRE_DATE", value: false },
    //   { label: "JOB_FAMILY", value: false },
    //   { label: "JOB_DESC", value: false },
    //   { label: "PAY_LEVEL", value: false },
    //   { label: "STORE_NUMBER", value: false },
    //   { label: "MANAGER_NAME", value: false },
    //   { label :"ASSO_NAME", value: false},
    //   { label :"SERVICE_NOW", value: false},
    //   { label :"ZOOM", value: false},
    //   { label :"SLACK", value: false},
    //   { label :"WORKPLACE", value: false},
    //   { label :"L2", value: false},
    //   { label :"L3", value: false},
    //   { label :"L4", value: false},
    //   { label :"L5", value: false}

    // ],
  
    hiredate :false,
    jobfamily:false,
    jobdesc:false,
    paylevel:false,
    storenum:false,
    mgrname:false,
    assoname:false,
    snow:false,
    zoom:false,
    slack:false,
    workplace:false,
    l2:false,
    l3:false,
    l4:false,
    l5:false,
    apply: false
  };

  handleFilter = label => {
    let modified_filter = [];
    modified_filter = _.forEach(this.state.filters, item => {
      if (item.label == label) {
        !item.value;
      }
    });
    console.log("Filter : ", modified_filter);
    // this.setState({
    //   filters: modified_filter
    // });
  };
  handleClick = () => {
    // this.setState({
    //   apply: !this.state.apply
    // });
    let a=[];
    let abc=  ['hiredate','jobfamily','jobdesc','paylevel','storenum',
    'mgrname','assoname','snow','zoom','slack','workplace','l2','l3','l4','l5'];
    let abc1=  ['HIRE_DATE','JOB_FAMILY','JOB_DESC','PAY_LEVEL','STORE_NUMBER',
    'MANAGER_NAME','ASSO_NAME','SERVICE_NOW','ZOOM','SLACK',
    'WORKPLACE','L2','L3','L4','L5'];
    // let filteredData = abc.filter( ele => {
      for(let i=0;i<abc.length;i++){
      if(this.state[abc[i]]==true){
        a.push(abc1[i]);
      }
    }
    console.log("Data for apply :" , a);
    axios
    .post(`http://localhost:7070${apiPaths.chart}`, {
      filed: a
    })
    .then(res => {
      console.log("Response : ", res.data);
      // if (res.data.type === "result") {
      //   addResponseMessage(this.manageResponse(res.data));
      // } else if (res.data.type === "return") {
      //   addResponseMessage(res.data.message);
      // }
    });
};
    // })
  // };

  handleInputChange = () => {
    this.setState({
      hiredate: !this.state.hiredate
    });
  };

  handleInputChange1 = () => {
    this.setState({
      jobfamily: !this.state.jobfamily
    });
  };

  handleInputChange2 = () => {
    this.setState({
      jobdesc: !this.state.jobdesc
    });
  };

  handleInputChange3 = () => {
    this.setState({
      paylevel: !this.state.paylevel
    });
  };

  handleInputChange4 = () => {
    this.setState({
      storenum: !this.state.storenum
    });
  };

  handleInputChange5 = () => {
    this.setState({
      mgrname: !this.state.mgrname
    });
  };

  handleInputChange6 = () => {
    this.setState({
      assoname: !this.state.assoname
    });
  };

  handleInputChange7 = () => {
    this.setState({
      snow: !this.state.snow
    });
  };

  handleInputChange8 = () => {
    this.setState({
      slack: !this.state.slack
    });
  };

  handleInputChange9 = () => {
    this.setState({
      zoom: !this.state.zoom
    });
  };

  handleInputChange10 = () => {
    this.setState({
      workplace: !this.state.workplace
    });
  };
  handleInputChange11 = () => {
    this.setState({
      l2: !this.state.l2
    });
  };

  handleInputChange12 = () => {
    this.setState({
      l3: !this.state.l3
    });
  };

  handleInputChange13 = () => {
    this.setState({
      l4: !this.state.l4
    });
  };

  handleInputChange14 = () => {
    this.setState({
      l5: !this.state.l5
    });
  };

  render() {
    // const options = [
    //   { value: "a", label: "A" },
    //   { value: "b", label: "B" },
    //   { value: "c", label: "C" }
    // ];
    // const erth = [
    //   { value: "Hire Date", label: "HIRE_DATE" },
    //   { value: "Job Family", label: "JOB_FAMILY" },
    //   { value: "Job Description", label: "JOB_DESC" },
    //   { value: "Pay Level", label: "PAY_LEVEL" },
    //   { value: "Store Number", label: "STORE_NUMBER" },
    //   { value: "Manager Name", label: "MANAGER_NAME" },
    //   { value: "Zoom", label: "ZOOM" },
    //   { value: "Slack", label: "SLACK" },
    //   { value: "Service Now", label: "SERVICE_NOW" },
    //   { value: "Workplace", label: "WORKPLACE" },
    //   { value: "L2", label: "L2" },
    //   { value: "L3", label: "L3" },
    //   { value: "L4", label: "L4" },
    //   { value: "L5", label: "L5" },
    //   { value: "Associate Name", label: "ASSO_ NAME" },
    // ];
    return (
      <div id="accordion" className="accordion">
        <div className="row">
          <div
            className="col-md-3 header"
            data-toggle="collapse"
            href="#collapseOne"
          >
            <h1 className="text-center">1</h1>
            <h4>Filter</h4>
          </div>
          <div
            className="col-md-3 header"
            data-toggle="collapse"
            href="#collapseTwo"
          >
            <h1 className="text-center" />
          </div>
          <div
            className="col-md-3 header"
            data-toggle="collapse"
            href="#collapseThree"
          >
            <h1 className="text-center" />
          </div>
          <div
            className="col-md-3 header"
            data-toggle="collapse"
            href="#collapseFour"
          >
            <h1 className="text-center" />
          </div>
        </div>

        <div className="card">
          <div
            id="collapseOne"
            className="collapse show"
            data-parent="#accordion"
          >
            <div className="card-body1 row">
              <div className="col fields">
                <strong>
                  <i>Fields</i>
                </strong>{" "}
                <br />
                {/* <div className="input-group mb-3">
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
                </div> */}
                {/* <p>> Label 1 </p> */}
                {/* <label for="f1" onClick={() => this.handleFilter("HIRE_DATE")}>Hire Date</label>
                <input id="f1"
                  type="checkbox"
                /> */}

       <label>
          <input
            type="checkbox"
            checked={this.state.hiredate}
            onChange={this.handleInputChange} />
            Hire Date
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.jobfamily}
            onChange={this.handleInputChange1} />
            Job Family
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.jobdesc}
            onChange={this.handleInputChange2} />
            Job Description
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.paylevel}
            onChange={this.handleInputChange3} />
            Pay Level
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.storenum}
            onChange={this.handleInputChange4} />
            Store Number
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.mgrname}
            onChange={this.handleInputChange5} />
            Manager Name
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.assoname}
            onChange={this.handleInputChange6} />
            Associate Name
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.snow}
            onChange={this.handleInputChange7} />
            Servicenow
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.slack}
            onChange={this.handleInputChange8} />
            Slack
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.zoom}
            onChange={this.handleInputChange9} />
            Zoom
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.workplace}
            onChange={this.handleInputChange10} />
            Workplace
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.l2}
            onChange={this.handleInputChange11} />
            Level 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.l3}
            onChange={this.handleInputChange12} />
            Level 3
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.l4}
            onChange={this.handleInputChange13} />
            Level 4
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.l5}
            onChange={this.handleInputChange14} />
            Level 5
        </label>
        <br />
                <button
                  type="button"
                  className="btn btn-primary btn-sm applyButton"
                  onClick={this.handleClick}
                >
                  Apply
                </button>
              </div>

              {/* <div className="col selected">
                Selected
                {/* {this.state.f1 ? (
                  <Select
                    isMulti
                    placeholder="Filter 1"
                    options={options}
                    className="selectedf1"
                  />
                ) : null}
                {this.state.f2 ? (
                  <Select
                    isMulti
                    placeholder="Filter 2"
                    options={options}
                    className="selectedf2"
                  />
                ) : null}
                {this.state.f3 ? (
                  <Select
                    isMulti
                    placeholder="Filter 3"
                    options={options}
                    className="selectedf3"
                  />
                ) : null} </div> */}


              <div className="col applied">
                {/* <button
                  type="button"
                  className="btn btn-info"
                  onClick={this.handleClick}
                >
                  Apply
                </button> */}
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body2">Work in Progress</div>
          </div>
        </div>

        <div className="card">
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body3">Work in Progress</div>
          </div>
        </div>

        <div className="card">
          <div id="collapseFour" className="collapse" data-parent="#accordion">
            <div className="card-body4">Work in Progress</div>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* <div className="filter">
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
                    <input
                      type="checkbox"
                      name="vehicle1"
                      value={this.state.f1}
                      onChange={this.handlef1}
                    />
                    Filter 1
                    <br />
                    <input
                      type="checkbox"
                      name="vehicle2"
                      value={this.state.f2}
                      onChange={this.handlef2}
                    />
                    Filter 2
                    <br />
                    <input
                      type="checkbox"
                      name="vehicle3"
                      value={this.state.f3}
                      onChange={this.handlef3}
                    />
                    Filter 3
                  </div>
                  <div className="col-4 selected">Selected
                  {this.state.f1 ? <Select isMulti placeholder= "Filter 1" options={options} className="selectedf1" />:null}
                  {this.state.f2 ? <Select isMulti placeholder= "Filter 2" options={options} className="selectedf2" />:null}
                  {this.state.f3 ? <Select isMulti placeholder= "Filter 3" options={options} className="selectedf3" />:null}
                  </div>
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
              <div className="card card-body">In Progress</div>
            </div>
          </div>

          <div className="col-12">
            <div className="collapse multi-collapse" id="multiCollapseExample4">
              <div className="card card-body">In Progress</div>
            </div>
          </div>
        </div>
      </div> */
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
