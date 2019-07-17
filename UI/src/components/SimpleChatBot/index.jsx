import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

class SimpleChatBot extends Component {

    render() {
        const otherFontTheme = {
            background: '#f5f8fb',
            fontFamily: 'Helvetica Neue',
            headerBgColor: '#6e48aa',
            headerFontColor: '#fff',
            headerFontSize: '16px',
            botBubbleColor: '#6E48AA',
            botFontColor: '#fff',
            userBubbleColor: '#fff',
            userFontColor: '#4a4a4a'
        };

        const steps = [
            {
              id: '1',
              message: 'Welcome to react chatbot!',
              trigger: '2',
            },
            {
              id: '2',
              message: 'Lets calculate your BMI (Body Mass Index)',
              trigger: '3'
            },
            {
              id: '3',
              message: 'Please type your height (cm)',
              trigger: 'height'
            },
            {
              id: 'height',
              user: true,
              trigger: '4'
            },
            {
              id: '4',
              message: 'Please type your weight (kg)',
              trigger: 'weight',
            },
            {
              id: 'weight',
              user: true,
              trigger: '5',
            },
            {
              id: '5',
              message: 'Thanks! Check out your BMI',
            }
          ];
        return (
            <div id="simpleChatBot">
                <ThemeProvider theme={otherFontTheme}>
                        <ChatBot steps={steps} />      
                </ThemeProvider>
            </div>
        )
    }
}
export default SimpleChatBot;