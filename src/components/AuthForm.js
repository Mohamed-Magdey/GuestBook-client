import React, {Component} from 'react';

export default class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props
            .onAuth(authType, this.state)
            .then(() => {
                this.props.history.push("/");
            })
            .catch(() => {})
    };

    render() {
        const {email, username} = this.state;
        const {heading, buttonText, signUp, history, errors, removeError} = this.props;

        history.listen(() => {
            removeError();
        });

        return (
            <div className="container">
                <h2 className="description">{heading}</h2>
                {errors.message && (
                    <div>{errors.message}</div>
                )}
                <form onSubmit={this.handleSubmit} className="guest-form">
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="password">Password:</label>
                        <input
                            placeholder="Password"
                            type="password"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    {signUp && (
                        <div className="field">
                            <label htmlFor="username">Username:</label>
                            <input
                                placeholder="Username"
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                            />
                        </div>
                    )}
                    <button type="submit">
                        {buttonText}
                    </button>
                </form>
            </div>
        );
    }
}
