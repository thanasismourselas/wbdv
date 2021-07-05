import React, { Component } from 'react';

class cancel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="cancel" >
                <i className="glyphicon glyphicon-remove-circle" ></i>{this.props.cancel}
            </div>
        );
    }
}

export default cancel;



