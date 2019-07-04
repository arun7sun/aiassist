import React, { Component } from 'react';
import './style';
import 'rc-slider/assets/index.css';
import moment from 'moment'
import Slider from 'rc-slider';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class RangeSlider extends Component {
  render = () => {
    return (
      <div>
        <Range allowCross={false} value={this.props.value} onChange={(e) => this.props.onChangeSlider(e)}
          tipFormatter={value =>  moment(value).format('DD,MMMM,YYYY')}
          min={this.props.min}
          max={this.props.max}
          marks={this.props.marks}
          dotStyle={{ display: "none" }}
          handleStyle={[{
            borderColor: 'white',
            height: 20,
            width: 20,
            marginLeft: -14,
            marginTop: -6,
            cursor: 'Pointer',
            borderWidth: 5,
            backgroundColor: 'purple',
            boxShadow: '-1.5px 1.5px 14px #888888'
          }, {
            borderColor: 'white',
            borderWidth: 5,
            height: 20,
            width: 20,
            marginLeft: -14,
            cursor: 'Pointer',
            marginTop: -6,
            backgroundColor: 'purple',
            boxShadow: '3.5px 4.5px 14px #888888'
          }]}
          trackStyle={[{ backgroundColor: "transparent", height: 10 }, { backgroundColor: "transparent", height: 10 }]}
          railStyle={{ backgroundImage: 'linear-gradient(to right, red, yellow, green)', height: 10 }}
        />
      </div>
    )
  }
}

export default RangeSlider;