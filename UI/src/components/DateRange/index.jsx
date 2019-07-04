import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./style";
import DatePicker from 'react-datepicker';



const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({

});

class DateRange extends Component {


  componentWillMount = () => {

  }

  componentWillReceiveProps = (nextProps) => {
  }



  render = () => {

    return (
      <div className="col-12 ">
        <div className="row Speed-date">
          <div className="col-sm-12 col-md-12 col-lg-4" >
            <label className='lbldate'>From</label>
            <div className='date-container'>
              <DatePicker
                selected={this.props.FromDate}
                dateFormat="DD-MM-YYYY"
                selectsStart
                startDate={this.props.FromDate}
                endDate={this.props.ToDate}
                onChange={this.props.handleFromDate}
                className='date'
              />
              <i className="fas fa-calendar-alt"></i>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4" >
            <label className='lbldate'>To</label>
            <div className='date-container'>
              <DatePicker
                selected={this.props.ToDate}
                dateFormat="DD-MM-YYYY"
                selectsEnd
                onChange={this.props.handleToDate}
                startDate={this.props.FromDate}
                endDate={this.props.ToDate}
                className='date'
              />
              <i className="fas fa-calendar-alt"></i>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4" >
              <button type="button" className="btn btn-warning  " onClick={(e)=>this.props.handleClick("e")} >Apply</button>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateRange);
