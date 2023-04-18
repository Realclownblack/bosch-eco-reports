import React, { Component } from 'react';
import { HomeLogado } from '../components/screen-home/HomeLogado';
import { Navbar } from '../components/universal/Navbar';


class Home extends Component {
    state = {}
    render() {
        return (
            <>
            <Navbar/>
            <HomeLogado/>
            </>
        );
    }
}

export default Home;