import { Component } from "react";
import CreatePin from "../components/CreatePin";
import Pin from "../components/Pin";

export default class PinContainer extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         pins: this.props.pins
    //     }
    // }
    
    componentDidMount() {
        if (this.props.user.data.id !== 0) {
            this.props.loadUsersPins(this.props.user.data.id)
        }
    }

    renderPins = () => {
        return this.props.pins.map(pin => <Pin key={pin.id} pin={pin}/>)
    }

    sortPins = () => {
        let a = this.props.pins.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        this.setState({
            pins: a
        })
    }

    render() {
        return (
            <div>
                <CreatePin addPin={this.props.addPin} user={this.props.user}/>
                <h2>Pins</h2>
                <button onClick={this.sortPins}>Sort Pins A-Z</button>
                <ul>
                    {this.renderPins()}
                </ul>
            </div>
        )
    }
}

