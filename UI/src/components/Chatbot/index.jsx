import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Widget,
  toggleWidget,
  toggleMsgLoader,
  addResponseMessage,
  setQuickButtons,
  renderCustomComponent,
  addLinkSnippet,
  dropMessages
} from "../ChatWidget";

import axios from "axios";
import apiPaths from "../../apiPaths";
import Modal from "react-modal";
import ClickQuery from "components/Recourse"

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
    color: "white"
  }
};

class Chatbot extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      feedback: "",
      agree: false,
      terms: true
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  link = {
    title:
      "Hi I'm JARVIS. Welcome to the chat! Don’t forget to comply with all Walmart standards, policies and procedures. Ok, before we start I have to do this legal thing. Please confirm that you will not share highly sensitive information with me such as social security numbers."
  };

  recourseButton = [{ name: "Job Family", value: "job" }, { name: "Asc Type", value: "asc" }, { name: "Department", value: "c" }, { name: "Grade Level", value: "d" }];

  componentDidMount = () => {
    toggleWidget();
    addResponseMessage(this.link.title);
    renderCustomComponent(this.welcomeMessage);
    // renderCustomComponent(this.clickQuenry,{props : [{ name: "Job Family", value: "job" }, { name: "Asc Type", value: "b" }, { name: "Department", value: "c" }, { name: "Grade Level", value: "d" }] },true);
  };
  componentDidUpdate = () => {
    renderCustomComponent(this.welcomeMessage);
  };

  componentWillUnmount() {
    toggleWidget();
  }

  welcomeMessage = () => {
    return (
      <div className={this.state.terms ? "terms" : "terms-hide"}>
        <button type="button" className="agree" onClick={this.handleAgree}>
          I, Agree
        </button>
        <button type="button" className="disagree" data-dismiss="modal">
          Disagree
        </button>
      </div>
    );
  };

  clickQuery = () => {
    return (
      <ClickQuery/>
    );
  };

  handleAgree = () => {
    this.setState({
      agree: true,
      terms: false
    });
    console.log("stateterm", this.state.terms);
    !this.state.agree ? addResponseMessage("You have Agreed, Thanks!") : console.log("Disagreed");
    // addResponseMessage("You have Agreed, Thanks!");
  };

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
  handleNewUserMessage = newMessage => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      if (newMessage === "fruits") {
        (setQuickButtons([
          { label: "Apple", value: "apple" },
          { label: "Orange", value: "orange" },
          { label: "Pear", value: "pear" },
          { label: "Banana", value: "banana" }
        ])) 
      }   
      else {
        addResponseMessage("Didnt get it");
      }
    }, 2000);
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
    handleQuickButtonClicked = e => {
      addResponseMessage("Selected " + e);
      setQuickButtons([]);
    };
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
                <h4 className="modal-title">JARVIS</h4>
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
                  handleQuickButtonClicked={this.handleQuickButtonClicked}
                  // title={false}
                  // showCloseButton={true}
                  profileAvatar="images/chatbot-icon.png"
                  // subtitle={false}
                  // launcher={false}
                  // fullScreenMode={false}
                  senderPlaceHolder="Type your query..."
                  isAgree={this.state.agree}
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
              <button className="negative" onClick={this.closeModal}>
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
