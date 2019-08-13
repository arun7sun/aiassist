import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// import { connect } from 'react-redux';
import "./style";
import Chart from "components/Filter";
import BarChart from "components/Chart/BarChart"

class Landingpage extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      view: false,
      array: [],
      addTool: false,
      id :0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleView = this.handleView.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
      id : null
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
      id : ++this.state.id,
      array : this.state.array.concat([this.state.id])
    });
  }
  render = () => {
      let array = null;
    if ( this.state.addTool ) {
        array = (
        <div>
             { this.state.array.map((array, index) => {
                  return <Chart />
             })}
        </div> 
        )
   }
    return (
      <main className="main-container">
        {/* {<div className="row"><button className="btn btn-info" onClick={this.handleAdd}>
          +
        </button>
        {array}
        </div>} */}
        <Chart/>
        <BarChart/>
        
      </main>
    );
  };
}
export default Landingpage;