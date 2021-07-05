import React, { Component } from 'react';

import Main from '../components/mainArea'


class iframe extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
        }

    }

    eventHandler = (i) => {

        this.props.onSelectEvent(i);
    }
    pagesHandler = (i) => {

        this.props.onSelectPage(i);
    }
    pageactionsHandler = (i) => {

        this.props.onSelectPageActions(i);
    }
    
    render() {
    

        return (
            <div id="iframe-container" style={{ border: '1px solid #ccc', height: '600px' }}>
                <div style={{ height: '26px', border: 'solid  #ff0000  0px' }}>
                    <nav class="navbar navbar-default">
                        <div class="container-fluid">
                            <ul class="nav navbar-nav">
                                {
                                    this.props.toolbarActions.map((toolbarItems) => {
                                        return <li><i className={toolbarItems.ico} style={{ color: '#1c1c1c' }}></i><a onClick={this.eventHandler.bind(this, toolbarItems)} className={toolbarItems.className}>{toolbarItems.name}</a></li>
                                    })
                                }
                               
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="bdvPages">
                    <i style={{ top: '1px', marginLeft: '10px', paddingRight: '5px', fontSize:'15px' }} className="glyphicon glyphicon-list-alt"></i>Pages
                    <div className="list-group">
                        {
                            this.props.pages.map((itemsPages) => {
                                return <button onClick={this.pagesHandler.bind(this, itemsPages)} type="button" className="list-group-item list-group-item-action">{itemsPages.name }</button>
                            })
                        }
                    </div>
                </div>
                <div style={{ paddingTop:'10px', width: '798px', height: '530px', border: 'solid  #ccc  1px', float: 'left' }}>
                    {this.props.children}
                </div>
                <div style={{ paddingTop: '10px', width: '798px', height: '43px', border: 'solid  #ccc  1px', float: 'left', backgroundColor:'#c1ebfb' }}>
                    {
                        this.props.pageActions.map((itemsActions) => {
                            return <button onClick={this.pageactionsHandler.bind(this, itemsActions)} class="btn"><i style={{top:'0px'}} className={itemsActions.ico}></i> {itemsActions.name}</button>
                        })
                    }
                  
                </div>
            </div>
        );
    }
}



export default iframe;



