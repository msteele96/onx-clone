import { Component } from "react";
import CreatePin from "../components/CreatePin";
import Pin from "../components/Pin";

export default class PinContainer extends Component {
    constructor(props) {
        super()
        // this.state = {}
    }

    componentDidMount() {
        debugger
        this.props.loadUsersPins(this.props.user.data.id)
    }

    renderPins = () => {
        this.props.pins.map(pin => Pin(pin))
        // return a bunch of pins
    }

    render() {
        return (
            <div>
                <CreatePin />
                <h2>Pins</h2>
                <table>
                    {/* {this.renderPins()} */}
                </table>
            </div>
        )
    }
}

