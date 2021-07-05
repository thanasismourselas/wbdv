import React, { Component } from 'react';

class pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageItems: [
                {
                    id:'1',
                    name: 'Page1',
                    url: ''
                }, {
                    id: '2',
                    name: 'Page2',
                    url: ''
                }, {
                    id: '3',
                    name: 'Page322',
                    url: ''
                },
                {
                    id: '3',
                    name: 'Page55',
                    url: ''
                }
            ]
        }

    }
    pageHandler = i => {
        //window.open('iframe', i, "width=900,height=950,left=400''");
    }
    render() {

        let pageItems = this.state.pageItems.map((i) =>
            <li onClick={this.pageHandler.bind(this, + i.id )} key={i.id} value={i.id}>{i.name}</li>
        );
        return (
            <div style={{ width: '150px', height: '573px', border: 'solid  #CCC  1px', float: 'left', paddingLeft: '12px', marginLeft: '-10px', paddingTop:'10px' }}>
                <span> <i className="glyphicon glyphicon-list-alt"></i>Pages</span>
                <ul>
                    {
                        pageItems
                    }
                </ul>
             
            </div>
        );
    }
}



export default pages;



