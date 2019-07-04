import React, { Component } from 'react';
import "./style";

class CheckBox extends Component {
    static defaultProps = {
        data: { name: "Response Rate", value: "responserate"},
        checked: false,
        disabled:false,
        onChange: () => { return true }
    }
    render = () => {
        return (
            <label className="check-container">{this.props.data.name}
                <input type="checkbox" checked={this.props.checked} onChange={(e)=>this.props.onChange(!this.props.checked)} disabled={this.props.disabled} />
                <span className="checkmark"></span>
            </label>
        )
    }
}

export default CheckBox;
