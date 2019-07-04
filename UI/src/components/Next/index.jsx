import React, { Component } from 'react'
import './style'

class Next extends Component {
    state = {
        prev: 0,
        count: this.props.count,
        next: this.props.data.length,
        data: this.props.data
    }
    onNext = () => {
        this.setState({
            prev: ((this.state.prev + this.state.count) > this.state.next) ? this.state.next : this.state.prev + this.state.count
        }, () => this.props.onChange(this.state.data.slice(this.state.prev, (this.state.prev + this.state.count))))

    }

    onPrev = () => {
        this.setState({
            prev: ((this.state.prev - this.state.count) < 0) ? 0 : this.state.prev - this.state.count,
        }, () => this.props.onChange(this.state.data.slice(this.state.prev, (this.state.prev + this.state.count))))
    }
    render = () => {
        return (<div className="next-wrapper">
            <div className="mb-2 clearfix">
                <h5 className="float-left">{this.props.name}</h5>
                <div className="left-right-arrow float-right">
                    <button onClick={this.onPrev} className={(this.state.prev === 0) ? "d-none" : ""}>
                        <i className="fas fa-caret-square-left"></i>
                    </button>
                    <span>{this.state.prev + 1} - {((this.state.prev + this.state.count) > this.state.next) ? this.state.next : this.state.prev + this.state.count} of {this.state.next}</span>
                    <button onClick={this.onNext} className={(this.state.prev + this.state.count >= this.state.next) ? "d-none" : ""}>
                        <i className="fas fa-caret-square-right"></i>
                    </button>
                </div>
            </div>
        </div>)
    }
}

export default Next;