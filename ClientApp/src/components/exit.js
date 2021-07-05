import React, { Component } from 'react';

class exit extends React.Component {
    constructor(props) {


        super(props);

        this.state = {

        }

    }


    componentDidMount() {

        console.log('butoons')

    }


    render() {
        return (
            <div className="exit" >
                <i className="glyphicon glyphicon-off" style={{ color: '#236389' }}></i>{this.props.exit}
               
            

            </div>
        );
    }
}



export default exit;



