

import React, { Component } from "react";
import { connect } from "react-redux";
import apiPaths from "../../apiPaths";
import Modal from "react-modal";

import "./style.css";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = dispatch => ({});

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Feedback extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount = () => {
    };

    componentWillMount = () => { };



    componentWillReceiveProps = () => { };
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    

    render = () => {
        return (
            <div>
                <button onClick={this.openModal}>Quit?</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hey, How did I do?</h2>
                    <form>
                        <button onClick={this.good}>:)</button>
                        <button onClick={this.bad}>:(</button>
                    </form>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </div>
        );
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feedback);


