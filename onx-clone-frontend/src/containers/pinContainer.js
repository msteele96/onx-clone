import { Component } from "react";
import CreatePin from "../components/CreatePin";
import Pin from "../components/Pin";

export default class PinContainer extends Component {
    constructor(props) {
        super()
        // this.state = {}
    }

    renderPins = () => {
        this.props.pins.map(pin => Pin(pin))
        // return a bunch of pins
    }

    render() {
        return (
            <div>
                <CreatePin />
                {/* {this.renderPins()} */}
            </div>
        )
    }
}

// mapStateToProps = () => {
// need this to give me pins to fill the container
// }