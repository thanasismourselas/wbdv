import React, { Component } from 'react';
import Pagebuttons from '../components/pageButtons'
import Save from '../components/save'
import Cancel from '../components/cancel'
import Exit from '../components/exit'

class toolbarHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saveButtom: 'save',
            cancelButtom: 'cancel',
            exitButtom: 'exit'
        }
    }
    render() {
        return (
            <div style={{ height: '26px', border: 'solid  #ff0000  0px' }}>
                <Pagebuttons />
                <Save save={this.state.saveButtom}/>
                <Cancel cancel={this.state.cancelButtom}/>
                <Exit exit={this.state.exitButtom}/>
            </div>
        );
    }
}
export default toolbarHeader;



