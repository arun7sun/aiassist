import React, { Component } from "react";
import "./style.css";
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";

export default class Autosuggest extends React.Component {
  constructor(props) {
    super(props);

    this.atItems = ["region", "division", "market", "store", "job family"];

    this.state = {
      suggestions: [],
      text: "",
      atSuggest: [],
      atText: ""
    };
  }

  //   resetCaretPosition = () => {
  //     this.rta.setCaretPosition(0);
  //   };

  onTextChanged = e => {
    const { items } = this.props;
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));

    // console.log('suggestions',suggestions)
  };

  selectCondition = token => {
    const { dimensions } = this.props;
    let suggest = [];
    if (token.length > 0) {
      const regex = RegExp(`^${token}`, "i");
      suggest = this.atItems.sort().filter(v => regex.test(v));
    }
    console.log("suggest : ", suggest[0]);
    var i,
      a = [];
    console.log("length ", dimensions.length);
    for (i = 0; i < dimensions.length; i++) {
      console.log("i", i);
      if (suggest == dimensions[i]["name"]) {
        console.log("dimensions :", dimensions[i]);
        a.push(dimensions[i]);
        // return this.dimensions[i]
      }
    }

    return a;
  };

  suggestionSelected(text) {
    this.setState(() => ({
      text: text,
      suggestions: []
    }));
  }

  renderSuggestion() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul style={{ listStyleType: "none" }}>
        {suggestions.map(items => (
          <li onClick={() => this.suggestionSelected(items)}>{items}</li>
        ))}
      </ul>
    );
  }

  render() {
    const Item = ({ entity: { name, char } }) => <div>{`${name}:${char}`}</div>;
    const { text } = this.state;
    return (
      <div className="Autosuggest">
        <div className="suggestionOverLay">{this.renderSuggestion()}</div>
        <ReactTextareaAutocomplete
          className="rcw-new-message"
          name="message"
          value={text}
          textAreaComponent="input"
          autoFocus
          autocomplete="off"
          placeHolder="Please type your query..."
          ref={this.props.reff}
          scrollToItem
          onChange={this.onTextChanged}
          loadingComponent={() => <span>Loading</span>}
          listStyle={{
            background: "gray",
            position: "absolute",
            bottom: "22px",
            width: "100%",
            left: "0",
            height: "100px",
            overflow: "auto",
            listStyleType: "none"
          }}
          trigger={{
            "@": {
              dataProvider: token => {
                return this.selectCondition(token)
                  ? this.selectCondition(token)
                  : { name: null, char: " Choose valid value..." };
              },
              component: Item,
              output: (item, trigger) => item.char
            }
          }}
        />
      </div>
    );
  }
}
