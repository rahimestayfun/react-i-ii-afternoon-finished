import React, { Component } from 'react'
import { identifier } from '@babel/types'
import AddPerson from '../components/AddPerson'

class Footer extends Component {
    constructor(){
        super()
            this.state={
                wasClicked: false
        };
        this.toggleWAsClicked= this.toggleWAsClicked.bind(this)   
        }
        
        toggleWAsClicked(){
            this.setState({wasClicked : !this.state.wasClicked});
        }


    
    render() {
        return (
            <div className="footer">
                
                
                <h3 onClick={this.props.previous}> {'<'}Previous </h3>
                <div className='button-group'>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button onClick={this.toggleWAsClicked}>New</button>
                </div>
                <h3 onClick={this.props.next} >Next{'>'}  </h3>
                {/* <AddPerson/> */}
                
            </div>
        )
    }
}


export default Footer