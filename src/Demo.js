import React , { Component } from 'react';

class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked : false
        }
        //this.clickHandle = this.clickHandle.bind(this);
    }
    // clickHandle(e){
    //     this.setState({clicked:true})
    // }
    clickHandle = e =>{
        this.setState({clicked:true})
    }
    render(){
        return(
            <div>
            <h1> {this.state.clicked ? 'Clicked!!!!' : 'Not Clicked'} </h1>
            <button onClick = {this.clickHandle}>CLick me!!!!</button>
            </div>
        )
    }
}
export default Demo;