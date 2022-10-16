import React from 'react'

import NavBar from '../components/Navbar/NavBar';
import Header from '../components/Header/Header';
import Benefits from '../components/Benefits/Benefits';
import Footer from '../components/Footer/Footer';

function Homepage(){
    return(
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Benefits></Benefits>
            <Footer></Footer>
        </div>
    )
}
export default Homepage