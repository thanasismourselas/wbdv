import React, { Component } from 'react';
import '../css/iframe.css'

class pageButtons extends React.Component {
    constructor(props) {


        super(props);

        this.state = {
        }

    }





    render() {
        return (
            <div className="pages" >
                <i className="glyphicon glyphicon-chevron-left" ></i>First |
                Last <i className="glyphicon glyphicon-chevron-right" ></i>

            </div>
        );
    }
}



export default pageButtons;



