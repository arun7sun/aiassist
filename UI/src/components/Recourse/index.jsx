import React, { Component } from "react";
import "./style";

class Recourse extends Component {
  static defaultProps = {
    props: [
      { name: "A", value: "a" },
      { name: "B", value: "b" },
      { name: "C", value: "c" },
      { name: "D", value: "d" }
    ],
    onChange: () => {
      return true;
    }
  };
  render = () => {
    return (
      <div className="recourse">
        {this.props.props.map((item, index) => (
          <button
            key={index}
            className={"btn"}
            onClick={e => this.props.onChange(item.value)}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  };
}

export default Recourse;
