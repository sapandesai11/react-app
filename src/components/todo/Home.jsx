import { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component{
    render(){
        return (
            <div>
                Welcome {this.props.match.params.name}. You can access your todo list by clicking <Link to="/todos">here</Link>.
            </div>
        )
    }
}

export default Home;