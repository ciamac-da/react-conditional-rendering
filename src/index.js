import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
// let UserGreeting = (props) => {
//     return <h1>Welcome back!</h1>;
// }

// let GuestGreeting = (props) => {
//     return <h1>Please login</h1>;
// }

// let Greeting = (props) => {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting/>;
//     }
//     return <GuestGreeting/>;
// }

let LoginButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

let LogoutButton = (props) => {
    // if (!props.warn) {
    //     return null;
    // }

    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div className="myDiv">
                {isLoggedIn.length > 0 && 
                    <h2>
                        You are awesome
                    </h2>
                }
                <p>
                    The user is <b>{isLoggedIn ? 'Logged in' : 'not Logged in'}</b> 
                </p>

                <div>
                    {isLoggedIn ? (
                        <LogoutButton onClick={this.handleLogoutClick}/>
                    ) : (
                        <LoginButton onClick={this.handleLoginClick}/>
                    )}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('root')
);
