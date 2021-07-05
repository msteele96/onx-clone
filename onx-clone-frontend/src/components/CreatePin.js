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
            <form onSubmit={this.handleSubmit}>
                <label>Type: </label>
                <select name="style">
                    <option value="tracks">Tracks</option>
                    <option value="stand">Stand</option>
                    <option value="Blind">Blind</option>
                    <option value="Sighting">Sighting</option>
                </select>
                <label>Name: </label>
                <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                <label>Latitude: </label>

                <label>Longitude: </label>

                <label>Notes: </label>
                <textarea value={this.state.notes} name="notes" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        )
    }
}