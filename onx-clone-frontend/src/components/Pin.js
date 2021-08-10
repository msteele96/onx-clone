import { Component } from "react";

export default class Pin extends Component{
    constructor(props){
        super(props)
        this.state = { likes: 0 }
    }

    render(){
    return (
        <div>
            <strong>Type: </strong>{this.props.pin.style} <strong>Name: </strong>{this.props.pin.name} <strong>Latitude: </strong>{this.props.pin.latitude} <strong>Longitude: </strong>{this.props.pin.longitude} <strong>Notes: </strong>{this.props.pin.notes}
        </div>
    )
}

}