import React, { Component } from 'react';
import { Navbar } from '../components/universal/Navbar';
import { BoxArquivados } from '../components/screen-scan/BoxArquivados';


class Arquivados extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar/>
            <BoxArquivados/>
            </>
        );
    }
}

export default Arquivados;