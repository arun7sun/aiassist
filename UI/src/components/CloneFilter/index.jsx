import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'components/Filter'

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
});
class CloneFilter extends Component {
    constructor() {
        super();
    
        this.state = {
          array: [],
          addTool: false,
          id :0
        };
        this.handleAdd = this.handleAdd.bind(this);
      }
  componentWillMount = () => {

  }
  componentWillReceiveProps = (nextProps) => {
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
      <div className="col-12 ">
        {<div><button className="btn btn-info" onClick={this.handleAdd}>
          +
        </button>
        {array}
        </div>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CloneFilter);
