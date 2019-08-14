import React, { Component } from "react";
import BarChart from "../Chart/BarChart";
import "./style";
import Select from "react-select";

export default class Filter extends Component {
  state = {
    f1: false,
    f2: false,
    f3: false,
    f4: false,
    f5: false,
    f6: false,

  };

  handlef1 = () => {
    this.setState({
      f1: !this.state.f1
    });
  };
  handlef2 = () => {
    this.setState({
      f2: !this.state.f2
    });
  };
  handlef3 = () => {
    this.setState({
      f3: !this.state.f3
    });
  };
  handlef4 = () => {
    this.setState({
      f4: !this.state.f4
    });
  };
  handlef5 = () => {
    this.setState({
      f5: !this.state.f5
    });
  };
  handlef6 = () => {
    this.setState({
      f6: !this.state.f6
    });
  };
  handleClick = () => {

  }

  render() {
    const options = [
      { value: "a", label: "A" },
      { value: "b", label: "B" },
      { value: "c", label: "C" }
    ];
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
            <h1 className="text-center">2</h1>
          </div>
          <div
            className="col-md-3 header"
            data-toggle="collapse"
            href="#collapseThree"
          >
            <h1 className="text-center">3</h1>
          </div>
          <div
            className="col-md-3 header"
            data-toggle="collapse"
            href="#collapseFour"
          >
            <h1 className="text-center">4</h1>
          </div>
        </div>

        <div className="card">
          <div id="collapseOne" className="collapse show" data-parent="#accordion">
            <div className="card-body1 row">
              <div className="col fields">
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
                <p>Label 1</p>
                <input
                  type="checkbox"
                  value={this.state.f1}
                  onChange={this.handlef1}
                />
                Division
                <br />
                <input
                  type="checkbox"
                  value={this.state.f2}
                  onChange={this.handlef2}
                />
                Region
                <br />
                <input
                  type="checkbox"
                  value={this.state.f3}
                  onChange={this.handlef3}
                />
                Market
                <br/><br/>
                <p>Label 2</p>
                <input
                  type="checkbox"
                  value={this.state.f4}
                  onChange={this.handlef4}
                />
                Job Family
                <br />
                <input
                  type="checkbox"
                  value={this.state.f5}
                  onChange={this.handlef5}
                />
                Filter 2
                <br />
                <input
                  type="checkbox"
                  value={this.state.f6}
                  onChange={this.handlef6}
                />
                Filter 3
              </div>

              <div className="col selected">
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
                ) : null} */}
              </div>
              <div className="col applied">
                <p>Applied</p>
                <button type="button" className="btn btn-info" onClick={this.handleClick}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div id="collapseTwo" className="collapse" data-parent="#accordion">
            <div className="card-body2">Lorem ipsum.2222</div>
          </div>
        </div>

        <div className="card">
          <div id="collapseThree" className="collapse" data-parent="#accordion">
            <div className="card-body3">Lorem ipsum..3333</div>
          </div>
        </div>

        <div className="card">
          <div id="collapseFour" className="collapse" data-parent="#accordion">
            <div className="card-body4">Lorem ipsum..4444</div>
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
