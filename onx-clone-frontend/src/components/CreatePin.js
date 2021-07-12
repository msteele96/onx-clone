import { Component } from "react";

export default class CreatePin extends Component {
    constructor(props) {
        super()
        this.state = {
            style: "",
            name: "",
            latitude: "",
            longitude: "",
            notes: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("submitted")
        this.setState(
            {
                style: "",
                name: "",
                latitude: "",
                longitude: "",
                notes: ""
            }
        )
    }

    render() {
        return (
            <>
                <b>Create a Pin</b>
                <form onSubmit={this.handleSubmit}>
                    <label>Type: </label>
                    <select name="style" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="tracks">Tracks</option>
                        <option value="stand">Stand</option>
                        <option value="Blind">Blind</option>
                        <option value="Sighting">Sighting</option>
                    </select>
                    <label>Name: </label>
                    <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <label>Latitude: </label>
                    <input type="number" min="-90" max="90" step=".000001" name="latitude" value={this.state.latitude} onChange={this.handleChange}/>
                    <label>Longitude: </label>
                    <input type="number" min="-180" max="180" step=".000001" name="longitude" value={this.state.longitude} onChange={this.handleChange}/>
                    <label>Notes: </label>
                    <textarea value={this.state.notes} name="notes" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </>
        )
    }
}