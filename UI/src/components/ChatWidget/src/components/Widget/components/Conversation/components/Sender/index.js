import React, { Component } from "react";
import PropTypes from "prop-types";
import { handleAgree } from "../../../../../../../../Chatbot";

// import send from '@assets/send_button.svg';

import "./style.scss";

class Sender extends Component {
  input = React.createRef();

  componentDidUpdate() {
    this.input.current.focus();
  }
  render() {
    const {
      sendMessage,
      placeholder,
      disabledInput,
      autofocus,
      isAgree
    } = this.props;
    return (
      <div className="chat-textbox">
        {isAgree ? (
          <form className="rcw-send" onSubmit={sendMessage}>
            <button className="book-icon">
              <i className="fas fa-book" />
            </button>
            <input
              type="text"
              className="rcw-new-message"
              name="message"
              placeholder={placeholder}
              disabled={disabledInput}
              autoFocus={autofocus}
              autoComplete="off"
              ref={this.input}
            />
            <button type="submit" className="send-icon">
              <i className="fas fa-paper-plane" alt="send" />
            </button>
          </form>
        ) : (
          <form className="rcw-send" onSubmit={sendMessage}>
            <button className="book-icon">
              <i className="fas fa-book" />
            </button>
            <input
              type="text"
              className="rcw-new-message"
              name="message"
              placeholder={placeholder}
              disabled={disabledInput}
              disabled
            />
            <button type="submit" className="send-icon">
              <i className="fas fa-paper-plane" alt="send" />
            </button>
          </form>
        )}
      </div>
    );
  }
}

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool,
  isAgree: PropTypes.bool
};

export default Sender;
