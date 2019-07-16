import React, { Component } from "react";
import { connect } from "react-redux";
import { Widget, addResponseMessage } from "react-chat-widget";
import Launcher from "react-chat-widget";
import axios from "axios";
import apiPaths from "../../apiPaths";

import "./style.css";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

class Chatbot extends Component {
  state = {};

  componentDidMount = () => {
    addResponseMessage("Hi User!");
  };

  componentWillMount = () => {};
  handleNewUserMessage = newMessage => {
    // sent the message throught the backend API
    axios.get(`http://localhost:7070${apiPaths.chat}`).then(res => {
      addResponseMessage(res.data.data);
    });
  };

  componentWillReceiveProps = () => {};

  render = () => {
    return (
      <div className="chatBot">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="AI Assist"
          subtitle={false}
          senderPlaceHolder="Type your query..."
        />
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbot);
