import React, { Component } from "react";
import { connect } from "react-redux";
import { Widget, toggleWidget, addResponseMessage, Launcher } from "react-chat-widget";
import axios from "axios";
import apiPaths from "../../apiPaths";

// import "./style.css";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

class Chatbot extends Component {
  state = {}

  componentDidMount = () => {
    addResponseMessage("Hi User!");
    toggleWidget();
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

    this.setState(prevState => ({
      profileClicked: !prevState.profileClicked
    }));
  };

  render = () => {
    return (
      <div className="chatBot">
          <div class="modal fade" data-keyboard="false" id="search-box">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                   <h4 class="modal-title">AI Assist</h4>
                   <button type="button" class="close" data-dismiss="modal"><i class="fas fa-caret-down"></i></button>
                </div>
                <div class="modal-body">
                  <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title={false}
                    showCloseButton={true}
                    subtitle={false}
                    launcher = {false}
                    fullScreenMode={false}
                    senderPlaceHolder="Type your query..."
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatbot);
