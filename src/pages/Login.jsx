import React, { Component } from 'react';
import { Navbar } from '../components/universal/Navbar';
import { BoxLogin } from '../components/screen-login/BoxLogin';


class Login extends Component {
    state = {}
    render() {
        return (
            <>
            <BoxLogin/>
            </>
        );
    }
}

export default Login;