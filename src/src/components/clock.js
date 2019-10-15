import React, { Component } from 'react'
import '../App.css'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.tick = this.tick.bind(this)
        this.state = { seconds: props.seconds }
        const { radius, stroke } = this.props;
        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 200);
    }

    tick() {
        if (this.state.seconds > 0) {
            this.setState({ seconds: this.state.seconds - 1 })
        } else {
            clearInterval(this.timer);
            window.location.reload();
        }
    }


    render() {
        const { radius, stroke } = this.props;
        const strokeDashoffset = this.circumference + this.state.seconds / 100 * this.circumference;
        return (
            <div className="contClock">
                {/* {this.state.seconds} */}
                <svg
                    height={radius * 2}
                    width={radius * 2}
                >
                    <circle
                        stroke="red"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeDasharray={this.circumference + ' ' + this.circumference}
                        style={{ strokeDashoffset }}
                        stroke-width={stroke}
                        r={this.normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                </svg>
            </div>
        )
    }
}


