import React, { Component } from 'react'
import '../data'
import '../styles/navbar.css'
import data from '../data'
import Footer from './Footer'


class Employer extends Component {
    constructor(){
        super()
            this.state={
                myData: data,
                position:0,
            }
    this.forwardPositionChange= this.forwardPositionChange.bind(this)
    this.backwardPositionChange= this.backwardPositionChange.bind(this)
  
        }

    forwardPositionChange(){
        if(this.state.position=== this.state.myData.length-1){
            this.setState({position:0})
        }else{
            this.setState({position: this.state.position+1})

        }   
    }
    backwardPositionChange(){
        if(this.state.position=== 0){
            this.setState({position:this.state.myData.length-1})
        }else{
        this.setState({position: this.state.position-1})
     }
    }

    render() {
        console.log(this.state.myData)
        // console.log(data[0]["id"])
        return (
            <div className="content">
                <div className='count'>
                <p >{data[this.state.position]['id']}/25</p>
                </div>
                
                <div>
                <h1><span className='text'>{this.state.myData[this.state.position].name.first}{' '} {this.state.myData[this.state.position].name.last}</span></h1>
   
                <h2><span className='text'>From: </span>{this.state.myData[this.state.position].city}, {this.state.myData[this.state.position].country} </h2>
                <h2><span className='text'>Job Title:</span> {this.state.myData[this.state.position].title}</h2>
                <h2><span className='text'>Employer:</span> {this.state.myData[this.state.position].employer}</h2>
                <div>          
                    <h2><span className='text'>Favorite Movies</span> </h2>
                    
                    <ol>
                        {this.state.myData[this.state.position].favoriteMovies.map(element=>{
                             return <span className='text'><li>{element} </li></span>
                         })}
                    
                    </ol>
                </div>
                </div>

                <Footer
                next= {this.forwardPositionChange}
                previous= {this.backwardPositionChange}
                />
            </div>
        )
    }
}
export default Employer
