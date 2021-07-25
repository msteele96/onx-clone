import { Component } from "react";
import { withRouter } from "react-router";

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }

    async handleRedirect() {
        this.props.setUser(this.state)
        this.props.history.push(`/dashboard`)
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.handleRedirect()

        // this.props.setUser(this.state)
        // console.log(this.props.user.user.data.id)
        // while (this.props.user.user.data.id !== 0) {
        //     this.props.history.push(`/users/${this.props.user.user.data.id}`)
        // }

        // setTimeout(this.props.history.push(`/users/${this.props.user.user.data.id}`), 2000)
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