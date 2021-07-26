import { Component } from "react";
import CreatePin from "../components/CreatePin";
import Pin from "../components/Pin";

export default class PinContainer extends Component {

    componentDidMount() {
        if (this.props.user.data.id !== 0) {
            this.props.loadUsersPins(this.props.user.data.id)
        }
    }

    renderPins = () => {
        return this.props.pins.map(pin => Pin(pin))
        // return a bunch of pins
    }

    render() {
        return (
            <div>
                <CreatePin />
                <h2>Pins</h2>
                {this.renderPins()}
            </div>
        )
    }
}

