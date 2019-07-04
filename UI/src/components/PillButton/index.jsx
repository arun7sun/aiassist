import React, { Component } from 'react';
import "./style";

class PillButton extends Component {
    static defaultProps = {
        data: [{ name: "YTD", value: "ytd" }, { name: "Month", value: "month" }, { name: "Week", value: "week" }, { name: "Day", value: "day" }],
        active:"ytd",
        onChange:()=>{return true}
    }
    render = () => {
        return (
            <div className="btn-group">
                {this.props.data.map((item, index) => <label key={index} className={"btn pill " + (this.props.active === item.value ? "active-tool" : "")} onClick={(e) =>  this.props.onChange(item.value)} >{item.name}</label>)}
            </div>
        )
    }
}

export default PillButton;
