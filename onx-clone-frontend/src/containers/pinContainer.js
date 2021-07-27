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
    }

    render() {
        return (
            <div>
                <CreatePin addPin={this.props.addPin} user={this.props.user}/>
                <h2>Pins</h2>
                <ul>
                    {this.renderPins()}
                </ul>
            </div>
        )
    }
}

