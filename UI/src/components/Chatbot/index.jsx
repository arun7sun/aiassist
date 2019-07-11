import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({


})

class Chatbot extends Component {
    state = {

    };

    componentDidMount = () => {
        addResponseMessage("Hi John!");
    }

    componentWillMount = () => {
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        addResponseMessage("Hi 123!");
        // Now send the message throught the backend API
    }

    componentWillReceiveProps = () => {

    }

    render = () => {



        return (
            <div className="App">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title="AI Assist"
                    subtitle= {false}
                    senderPlaceHolder = "Type your query..."
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);


