import React, { Component } from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";
import { connect } from "react-redux";

import { hideAvatar } from "../../../../../../store/actions";
import { scrollToBottom } from "../../../../../../utils/messages";

import Loader from "./components/Loader";
import "./styles.scss";

class Messages extends Component {
  componentDidMount() {
    scrollToBottom(this.$message);
  }

  componentDidUpdate() {
    scrollToBottom(this.$message);
  }

  $message = null;

  getComponentToRender = message => {
    const ComponentToRender = message.get("component");
    const previousMessage = this.props.messages.get();
    console.log("huehue: ", message);
    console.log("hue: ", previousMessage);
    console.log("props is: ", message.get("props"));
    console.log("lalal: ", message.get("type"));
    console.log("askldh: ", message.get("sender"));
    if (message.get("type") === "component") {
      return (
        <React.Fragment>
          <ComponentToRender {...message.get("props")} />
        </React.Fragment>
      );
    } else {
      if (message.get("sender") === "client") {
        return (
          <React.Fragment>
            <ComponentToRender message={message} />
            <img src="images/icon.png" className="rcw-avatar" alt="profile" />
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment>
            <ComponentToRender message={message} />
          </React.Fragment>
        );
      }
    }
  };

  shouldRenderAvatar = (message, index) => {
    const previousMessage = this.props.messages.get(index - 1);
    if (message.get("showAvatar") && previousMessage.get("showAvatar")) {
      this.props.dispatch(hideAvatar(index));
    }
  };

  render() {
    const { messages, profileAvatar, typing } = this.props;
    return (
      <div
        id="messages"
        className="rcw-messages-container"
        ref={msg => (this.$message = msg)}
      >
        {messages.map((message, index) => (
          <div className="rcw-message" key={index}>
            {profileAvatar && message.get("showAvatar") && (
              <img src={profileAvatar} className="rcw-avatar" alt="profile" />
            )}
            {this.getComponentToRender(message)}
          </div>
        ))}
        <Loader typing={typing} />
      </div>
    );
  }
}

Messages.propTypes = {
  messages: ImmutablePropTypes.listOf(ImmutablePropTypes.map),
  profileAvatar: PropTypes.string
};

export default connect(store => ({
  messages: store.messages,
  typing: store.behavior.get("msgLoader")
}))(Messages);
