import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Widget,
  toggleWidget,
  addResponseMessage,
  addLinkSnippet,
  Launcher
} from "react-chat-widget";
import axios from "axios";
import apiPaths from "../../apiPaths";
import Modal from "react-modal";

// import "./style.css";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "#004c91",
    transform: "translate(-50%, -50%)",
    color : "white"
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
      "Hi! I'm JARVIS, the associate's chat bot. How can I assist you with your People metrics today? It is the responsibility of the authorised user to safeguard the information contained in this application. In the event you are using a public computer, please be aware of your immediate surroundings.  Click below to know about Walmart Privacy Policy.",
    link:
      "https://corporate.walmart.com/privacy-security/walmart-privacy-policy"
  };

  componentDidMount = () => {
    toggleWidget();
    addLinkSnippet(this.link);

    // setQuickButtons(this.buttons);
  };

  componentWillUnmount() {
    toggleWidget();
  }
  handleNewUserMessage = newMessage => {
    // sent the message through the backend API
    axios.get(`http://localhost:7070${apiPaths.chat}`).then(res => {
      addResponseMessage(res.data.data);
    });
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
                  title={false}
                  showCloseButton={true}
                  subtitle={false}
                  launcher={false}
                  fullScreenMode={false}
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
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              How do you think I did today?
            </h2>
            <div className="feedback-button">
              <button className="positive" onClick={this.good}>
                <i className="fa fa-thumbs-up" />
              </button>
              <button className="negative" onClick={this.bad}>
                <i className="fa fa-thumbs-down" />
              </button>
            </div>
            <button
              onClick={this.closeModal}
              className="close"
              data-dismiss="modal"
            >
              close
            </button>
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
