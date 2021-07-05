import React, { Component } from 'react';
import evenData from '../components/toolbarEvents';
class save extends React.Component {
    constructor(props) {

     
        super(props);

        this.state = {
            event:save,
           
        }

    }


    componentDidMount() {

        console.log('butoons')

    }

    saveHandler = i => {
        console.log('i')
        console.log(i)
        console.log('evenData()')
        console.log(evenData())
        var event = evenData()
        console.log('event')
        console.log(event)
        if (evenData.CLOSEWINDOW === i) {

            window.close()

        }
        else if (evenData.DATATRANSFER === i) {
           
        }
        else if (evenData().CLOSEWINDOWANDREFRESH === i) {
            alert('mpika')
            window.close()
        }
        else if (evenData.PROCEDURECOMPLETED === i) {
           
          
            window.close()
        }
        else if (evenData.PROCEDURECOMPLETEDWITHREFRESH === i) {
           
        }
        else if (evenData.PROCEDURECOMPLETEDWITHMESSAGE === i) {
           
        }
        else if (evenData.PROCEDUREFAILEDWITHERROR === i) {
          
        }
        else if (evenData.PROCEDUREFAILED === i) {
          
        }
        else if (evenData.ACTION === i) {
           
        }
        else {
           
        }
    }
    render() {
        return (
            <div className="save" >
                <i onClick={this.saveHandler.bind(this,'closeWindowAndRefresh')} className="glyphicon glyphicon-save" on ></i>{this.props.save}

            </div>
        );
    }
}



export default save;



