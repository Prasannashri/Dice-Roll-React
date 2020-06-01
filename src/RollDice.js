import React , {Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component{
    static defaultProps = {
        side : ['one','two','three','four','five','six']
    }
    constructor(props){
        super(props);
        this.state = {
            die1 : 'one',
            die2 : 'one',
            isRolling : false
        }
    }
    roll = () =>{
       const newdie1 = this.props.side[
             Math.floor(Math.random() * (this.props.side).length)
         ];
         const newdie2 = this.props.side[
             Math.floor(Math.random() * (this.props.side).length)
         ]; 
         this.setState({
             die1 : newdie1 ,
             die2 : newdie2 ,
             isRolling : true
         })
         setTimeout(() =>{
            this.setState({isRolling : false})
         },1000)
    }
    render(){
        return(
            <div className = "RollDice">
                <div className="RollDice-container">
                    <Die face = {this.state.die1} rolling = {this.state.isRolling}/>
                    <Die face = { this.state.die2} rolling = {this.state.isRolling}/>  
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice!!'}
                </button>
            </div>
        )
    }
}
export default RollDice;