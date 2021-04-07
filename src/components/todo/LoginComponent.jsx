import { Component } from "react";
import "./logincomponent.css";
import ErrorDisplay from "./ErrorDisplay";
import AuthenticationService  from './AuthenticationService.js';

class LoginComponent extends Component{

    constructor(){
        super()
        this.state={
            username: 'sapan.desai',
            password: '',
            errorMessage: '',
            hasLoginPressed: false
        }
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container-fluid">
                    <div>
                        <ErrorDisplay errorMessage={this.state.errorMessage}/>
                    </div>
                    <div className="form-group mrgn-top-15">
                        Username : <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        Password : <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className="btn btn-primary mrgn-top-15" onClick={this.validate}>Login</button>
                    </div>
                </div>
            </div>
        );
    }


    handleChange = (event) => {
        console.log(event.target.id);
        this.setState(
            (prevState) => {
                return {
                    [event.target.id]: event.target.value
                }
            }
        )
    }

    validate = () => {
        if(this.state.username === 'sapan.desai' && this.state.password === 'pwd'){
            this.props.history.push(`/home/${this.state.username}`);
            AuthenticationService.registerUser(this.state.username, this.state.password);
        }
        else{
            this.setState(
                (prevState) =>{
                    return {
                        errorMessage:'Invalid Credentails'
                    }
                }
            );
        }
    }
}


export default LoginComponent;