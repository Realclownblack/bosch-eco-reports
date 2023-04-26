import React, { Component } from 'react';
import { Navbar } from '../components/universal/Navbar';
import { BoxCadastro } from '../components/screen-scan/BoxCadastro';


class CadastroUser extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar/>
            <BoxCadastro/>
            </>
        );
    }
}

export default CadastroUser;