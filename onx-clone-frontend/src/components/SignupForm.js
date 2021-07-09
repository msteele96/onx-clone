import { Component } from "react";

export default class SignupForm extends Component {
    constructor(props) {
        super()
        this.state = {
            username: "",
            password: "",
            confirm_password: ""
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
        console.log(this.state)
        this.setState(
            {
                username: "",
                password: "",
                confirm_password: ""
            }
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                <label>Password: </label>
                <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                <label>Confirm Password: </label>
                <input type="password" value={this.state.confirm_password} name="confirm_password" onChange={this.handleChange} />
                <input type="submit"/>
            </form>
        )
    }
}