import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Widget,
  toggleWidget,
  addResponseMessage,
  addLinkSnippet,
  Launcher
} from "../ChatWidget";
// import {
//   Widget,
//   toggleWidget,
//   addResponseMessage,
//   addLinkSnippet,
//   Launcher
// } from 'react-chat-widget';
import axios from "axios";
import apiPaths from "../../apiPaths";
import Modal from "react-modal";

// import "./style.css";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "1px solid rgb(204, 204, 204)",
    background: "rgb(0, 76, 145)",
    overflow: "auto",
    borderRadius: "4px",
    outline: "none",
    padding: "12px",
    minWidth: "23% !important",
    marginRight: "-50%",
    transform: "translate(-51%, -50%)",
    color: "white",
    fontFamily: "Helvettica"
  }
};

class Chatbot extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      feedback: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  link = {
    title:
      "Welcome to the chat!  Don’t forget to comply with all Walmart standards, policies and procedures.  Don’t send personal information, such as medical diagnoses, social security numbers or financial account numbers, through the chat.",
    link:
      "https://corporate.walmart.com/privacy-security/walmart-privacy-policy"
  };

  componentDidMount = () => {
    toggleWidget();
    addResponseMessage(this.link.title);

    // setQuickButtons(this.buttons);
  };

  componentWillUnmount() {
    toggleWidget();
  }

  handleNewUserMessage = newMessage => {
    // sent the message throught the backend API
    axios
      .post(`http://localhost:7070${apiPaths.chat}`, {
        userMessage: newMessage
      })
      .then(res => {
        console.log("Response : ", res.data);
        if (res.data.type === "result") {
          addResponseMessage(this.manageResponse(res.data));
        } else if (res.data.type === "return") {
          addResponseMessage(res.data.message);
        }
      });
  };

  manageResponse = body => {
    return body.message.length == 1
      ? body.message[0]
      : "Received Multiple data results - Yet to be handled";
  };

  componentWillReceiveProps = () => {};

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "white";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleProfileClick = () => {
    if (!this.state.profileClicked) {
      document.addEventListener("click", this.handleProfileOutsideClick, false);
    } else {
      document.removeEventListener(
        "click",
        this.handleProfileOutsideClick,
        false
      );
    }
    handleFeedback = e => {
      this.setState({ feedback: e });
    };

    this.setState(prevState => ({
      profileClicked: !prevState.profileClicked
    }));
  };

  render = () => {
    return (
      <div className="chatBot">
        <div className="modal fade" data-keyboard="false" id="search-box">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">AI Assist</h4>
                <button
                  type="button"
                  onClick={this.openModal}
                  className="close"
                  data-dismiss="modal"
                >
                  <i className="fas fa-caret-up" />
                </button>
              </div>
              <div className="modal-body">
                <Widget
                  handleNewUserMessage={this.handleNewUserMessage}
                  // title={false}
                  // showCloseButton={true}
                  profileAvatar="images/chatbot-icon.png"
                  // subtitle={false}
                  // launcher={false}
                  // fullScreenMode={false}
                  senderPlaceHolder="Type your query..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="feedback">
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Feedback Modal"
            ariaHideApp={false}
          >
            <div className="d-flex">
              <h2
                className="title"
                ref={subtitle => (this.subtitle = subtitle)}
              >
                How do you think I did today?
              </h2>
              {/* <button
                onClick={this.closeModal}
                className="close"
                data-dismiss="modal"
              >
                <i className="fa fa-window-close " />
              </button> */}
            </div>
            <div className="feedback-button">
              <button className="positive" onClick={this.closeModal}>
                <i className="fa fa-thumbs-up" />
              </button>
              <button className="negative" onClick={this.closeModal }>
                <i className="fa fa-thumbs-down" />
              </button>
            </div>
          </Modal>
        </div>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbot);
