import { Component } from "react";
import LoginComponent from "./LoginComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import GenericError from "./GenericError";
import TodoComponent from "./TodoComponent";
import Header from "../../Header";
import Footer from "../../Footer";
import Logout from "./Logout";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Dashboard from "./DashboardComponent";

class TodoAapp extends Component{
    render(){
        return (
            <div className="container-fluid">
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login"  component={LoginComponent}></Route>
                        <AuthenticatedRoute path="/home/:name"  component={Home} />
                        <AuthenticatedRoute path="/todos"  component={TodoComponent} />
                        <AuthenticatedRoute path="/dashboard"  component={Dashboard} />
                        <AuthenticatedRoute path="/logout"  component={Logout} />
                        <Route component={GenericError}></Route>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default TodoAapp;