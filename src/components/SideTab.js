import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Header from '../components/Header'


const SideTab = () => {
    return (
        <div className="container">

            <Tabs
                defaultActiveKey="profile"
                id=""
                className="mb-3"
                fill
            >
                <Tab eventKey="home" title="Home">
                    <Header />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Header />
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                    <Header />
                </Tab>
            </Tabs>
        </div>
    );
}

export default SideTab