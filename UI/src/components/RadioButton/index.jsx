import React, { Component } from 'react';
import "./style";

class RadioButton extends Component {
    static defaultProps = {
        data: { name: "Response Rate", value: "responserate"},
        checked: false,
        onChange: () => { return true }
    }
    render = () => {
        return (
            <label className="radio-container">{this.props.data.name}
                <input type="radio" checked={this.props.checked} onChange={(e)=>this.props.onChange(this.props.data.value)} />
                <span className="checkmark"></span>
            </label>
        )
    }
}

export default RadioButton;
