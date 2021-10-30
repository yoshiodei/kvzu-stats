import React from 'react';
import Home from './Home';
import Sidenav from './navs/SideNav';

const Main = () => {
    return (
        <section className="main">
            <Sidenav />
            <Home />
        </section>
    );
}

export default Main;
