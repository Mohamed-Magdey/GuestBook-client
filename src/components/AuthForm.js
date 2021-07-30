import React, {useState} from 'react';

const AuthForm = ({heading, buttonText, signUp, history, errors, removeError, onAuth, dispatch}) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = e => {
        let target = e.target.name;
        let value = e.target.value;

        if(target === 'email'){
            setEmail(value)
        }
        
        if(target === 'password') {
            setPassword(value);
        }

        if(target === 'username') {
            setUsername(value);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        const authType = signUp ? "signup" : "signin";
        const userData = {email, username, password};

        dispatch(
            onAuth(authType, userData)
        ).then(() => {
            history.replace("/");
        }).catch(() => {})
    };

    history.listen(() => {
        dispatch(removeError);
    });

    return (
        <div className="container">
            <h2 className="description">{heading}</h2>
            {errors.message && (
                <div className="error-message">{errors.message}</div>
            )}
            <form onSubmit={handleSubmit} className="guest-form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input
                        placeholder="Password"
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
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
                            onChange={handleChange}
                        />
                    </div>
                )}
                <button type="submit" className="btn-new">
                    {buttonText}
                </button>
            </form>
        </div>
    );
}


export default AuthForm;