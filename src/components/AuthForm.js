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

    render() {
        const {email, username} = this.state;
        const {heading, buttonText} = this.props;
        return (
            <div className="container">
                <h2 className="description">{heading}</h2>
                <form onSubmit={this.handleSubmit} className="guest-form">
                    <h2>{heading}</h2>
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
                </form>
            </div>
        );
    }
}
