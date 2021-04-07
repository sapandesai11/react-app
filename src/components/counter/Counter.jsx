import { Component } from "react";
import CounterButton from "./CounterButton";
import './counter.css'

class Counter extends Component{

    constructor(){
        super();
        this.state= {
            counter: 0
        }

        //this.finalcount = this.finalcount.bind(this);
    }

    render(){
        return (
            <div className="counterButton">
                <CounterButton incrementByMethod={this.increment} decrementByMethod={this.decrement}></CounterButton>
                <CounterButton incrementBy = {5} decerementBy= {5} incrementByMethod={this.increment} decrementByMethod={this.decrement}></CounterButton>
                <CounterButton incrementBy = {10} decerementBy= {10} incrementByMethod={this.increment} decrementByMethod={this.decrement}></CounterButton>
                <span>{this.state.counter}</span>
                <div>
                    <button className="resetBtn" onClick={this.reset}>Reset</button>
                </div>
            </div>
            
        )
    }

    increment = (by) => {
        console.log('inside parent increment method');
         this.setState(
             {
                 counter: this.state.counter + by
            }
        );
     }

     decrement = (by) => {
         console.log('inside parent decrement method');
         this.setState(
             (previousState) => {
                return { counter : previousState.counter - by}
             }
         );
     }

     reset = () => {
         console.log('Inside reset method');
         this.setState(
             (prevState) => {
                 return {counter: 0}
             }
         );
     }

}



export default Counter;