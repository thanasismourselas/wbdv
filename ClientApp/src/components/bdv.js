import React, { Component } from 'react';
import Iframe from '../components/iframe'
//Data for toolbars Area ( buttons )
import { toolbarActions } from '../components/dataToolbar';
//Data for pages area 
import { pages } from '../components/dataPages';
//Data for pagesActions area 
import { pageActions } from '../components/dataPageActions';
//Event function
import eventData from '../components/toolbarEvents';
//fetch data to call API
import fetchData from '../components/FetchData';


class bdv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // Event handler for toolbar actions
    eventsHandler = i => {
        console.log('toolbarActions')
        console.log(i)
      
        if (eventData().CLOSEWINDOW === i) {
            //window.close()
        }
        else if (eventData().DATATRANSFER === i) {
        }
        else if (eventData().CLOSEWINDOWANDREFRESH === i) {         
         //  window.close()
        }
        else if (eventData.PROCEDURECOMPLETED === i) {
          // window.close()
        }
        else if (eventData.PROCEDURECOMPLETEDWITHREFRESH === i) {
        }
        else if (eventData.PROCEDURECOMPLETEDWITHMESSAGE === i) {
        }
        else if (eventData.PROCEDUREFAILEDWITHERROR === i) {
        }
        else if (eventData.PROCEDUREFAILED === i) {
        }
        else if (eventData.ACTION === i) {
        }
        else {
        }
    }
    pagesHandler = i => {
        console.log('pages')
        console.log(i)
    }
    pagesActionsHandler = i => {
         console.log('pageActions')
         console.log(i)
    }
    render() {
       
        return (
          
            <Iframe toolbarActions={toolbarActions} pages={pages} pageActions={pageActions} onSelectEvent={this.eventsHandler} onSelectPage={this.pagesHandler} onSelectPageActions={this.pagesActionsHandler } >
                <p>marios</p>
                <h1>thanasis</h1>

            </Iframe>
            
            
        );
    }
}
export default bdv;



