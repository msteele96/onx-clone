import { Component } from "react";
import CreatePin from "../components/CreatePin";
import Pin from "../components/Pin";

export default class PinContainer extends Component {

    componentDidMount() {
        this.props.loadUsersPins(this.props.user.data.id)
    }

    renderPins = () => {
        return this.props.pins.map(pin => Pin(pin))
    }

    render() {
        return (
            <div>
                <CreatePin />
                <h2>Pins</h2>
                <ul>
                    {this.renderPins()}
                </ul>
            </div>
        )
    }
}

