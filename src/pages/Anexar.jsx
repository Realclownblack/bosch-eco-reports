import React, { Component } from 'react';
import { Navbar } from '../components/universal/Navbar';
import { BoxScan } from '../components/screen-scan/BoxScan';


class Anexar extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar/>
            <BoxScan/>
            </>
        );
    }
}

export default Anexar;