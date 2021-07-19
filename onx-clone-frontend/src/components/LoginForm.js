import { Component } from "react";

export default class LoginForm extends Component {
    constructor(props) {
        super()
        this.state = {
            username: "",
            password: "",
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
        this.props.setUser(this.state)
        this.setState(
            {
                username: "",
                password: "",
            }
        )
    }

    render() {
        return (
            <>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChange}/>
                    <label>Password: </label>
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                    <input type="submit"/>
                </form>
            </>
        )
    }
}