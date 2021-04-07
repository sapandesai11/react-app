import {Component} from "react"
class AddTodo extends Component{
    render(){
        return <div className="container">
            <button className="btn btn-primary" onClick={this.addTodo}>Add Todo</button>
        </div>
    }

    addTodo = () => {
        
    }
}

export default AddTodo