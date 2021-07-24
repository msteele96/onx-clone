import { Component } from "react";
import { withRouter } from "react-router";

class LoginForm extends Component {
    constructor(props) {
        super()
        this.state = {
            username: "",
            password: "",
        }
    }

    async handleRedirect() {
        const set = await this.props.setUser(this.state)
        debugger
        this.props.history.push(`users/${set}`)
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        // this.handleRedirect()
        // Promise.allSettled()
        const set = new Promise(this.props.setUser(this.state), "")
        set.then(this.props.history.push(`/users/${set}`))
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

export default withRouter(LoginForm)