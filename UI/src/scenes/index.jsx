import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { reveal as Menu } from "react-burger-menu";
import "./style";
import Filter from "components/Filter";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Landingpage extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      view: false,
      array: [],
      addTool: false,
      id: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
      id: null
    });
  }
  handleView() {
    this.setState({
      view: !this.state.view
    });
  }
  handleAdd() {
    this.setState({
      addTool: !this.state.displayQuestions,
      id: ++this.state.id,
      array: this.state.array.concat([this.state.id])
    });
  }
  render = () => {
    let array = null;
    if (this.state.addTool) {
      array = (
        <div>
          {this.state.array.map((array, index) => {
            return <Chart />;
          })}
        </div>
      );
    }
    return (
      <main className="main-container">
        <div className="row">
          {/* <div className="col-md-2 side-menu">
            <ul>
              <li><a href="#">Associate Roster</a></li>
              <li><a href="#">Store Metrics</a></li>
              <li><a href="#">Leaders Organization</a></li>
              <li><a href="#">Reporting hierarchy</a></li>
              <li><a href="#">Pay Layer overview</a></li>
              <li><a href="#">My insights</a></li>
            </ul>
          </div> */}
          <div className="menu-box-section">
            <div className="row">
              <div className="col-md-4 text-center">
                <a href="#">
                  <h1>Associate Roster</h1>
                </a>
              </div>
              <div className="col-md-4 text-center">
                <a href="#">
                  <h1>Store Metrics</h1>
                </a>
              </div>
              <div className="col-md-4 text-center">
                <a href="#">
                  <h1>Leaders Organization</h1>
                </a>
              </div>
              <div className="col-md-4 text-center">
                <a href="#">
                  <h1>Reporting hierarchy</h1>
                </a>
              </div>
              <div className="col-md-4 text-center">
                <a href="#">
                  <h1>Pay Layer overview</h1>
                </a>
              </div>
              <div className="col-md-4 text-center">
                <a href="#">
                  <h1>My insights</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <SideNav
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>Line Chart</NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>Bar Chart</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav> */}
        <div className="filter-menu">
          <button className="close-button btn btn-default btn-sm">
            close <i className="fa fa-close"></i>
          </button>

          <div className="col-12">
            <div id="accordion">
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    Headcount across stories{" "}
                    <i className="fa fa-caret-right float-right"></i>
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="collapse hide"
                  data-parent="#accordion"
                >
                  <div Name="card-body" className="card-body">
                    kakashkashksahskahdkdkakashkashksahskahdkd
                    kakashkashksahskahdkdkakashkashksahskahdkdkakashkashksahskahdkdkakashkashksahskahdkdk
                    akashkashksahskahdkdkakashkashksahskahdkd
                    kakashkashksahskahdkd
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href="#Exit-across-stories"
                  >
                    Exit across stories{" "}
                    <i className="fa fa-caret-right float-right"></i>
                  </a>
                </div>
                <div
                  id="Exit-across-stories"
                  className="collapse show"
                  data-parent="#accordion"
                >
                  <div Name="card-body" className="card-body">
                    <div className="row">
                      {/* <!--heading area---> */}
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-toggle="pill"
                            href="#home"
                          >
                            Dimmentions
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="pill"
                            href="#menu1"
                          >
                            Filters
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* <!--body content area---> */}
                    <div className="tab-content">
                      <div className="tab-pane  active" id="home">
                        <div className="custom-control custom-checkbox">
                          <div className="col-12">
                            <ul className="list-unstyled">
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Division
                                </label>
                              </li>

                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Market
                                </label>
                              </li>

                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Region
                                </label>
                              </li>

                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Store
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div className="col-12 divider">
                            <h6>Measures</h6>
                            <ul className="list-unstyled">
                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Division
                                </label>
                              </li>

                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Market
                                </label>
                              </li>

                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Region
                                </label>
                              </li>

                              <li>
                                <label>
                                  <input type="checkbox" />
                                  <span class="checkmark"></span>
                                  Store
                                </label>
                              </li>
                            </ul>
                          </div>

                          <div className="col-12 chart-type">
                            <h6>Chart type</h6>
                            <ul className="list-unstyled d-flex">
                              <li>
                                <i className="fa fa-pie-chart"></i>
                              </li>
                              <li>
                                <i className="fa fa-bar-chart"></i>
                              </li>
                              <li>
                                <i className="fa fa-line-chart"></i>
                              </li>
                              <li>
                                <i className="fa fa-area-chart"></i>
                              </li>
                            </ul>
                          </div>

                          <div className="col-12 visualize">
                            <button className="close-button btn btn-default btn-sm">
                              Visualize
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane  fade" id="menu1">
                        <ul className="list-unstyled">
                          <li>
                            <label>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                              Division
                            </label>
                          </li>

                          <li>
                            <label>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                              Market
                            </label>
                          </li>

                          <li>
                            <label>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                              Region
                            </label>
                          </li>

                          <li>
                            <label>
                              <input type="checkbox" />
                              <span class="checkmark"></span>
                              Store
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {<div className="row"><button className="btn btn-info" onClick={this.handleAdd}>
            +
          </button>
          {array}
          </div>} */}
        {/* <Filter/>   */}
      </main>
    );
  };
}
export default Landingpage;
