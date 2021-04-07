import { Component } from "react";
import AddTodo from "./AddTodoComponent";
class TodoComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
                todos: [
                    {id:1, description:'Learn React', iscompleted:false, targetdate: new Date()},
                    {id:2, description:'Learn Redux Saga', iscompleted:false, targetdate: new Date()},
                    {id:3, description:'Explor Old Import', iscompleted:false, targetdate: new Date()},
                    {id:4, description:'Export New Import', iscompleted:false, targetdate: new Date()}
                ],
                isAddTodoRowDisplay: false,
                newDescription:'',
                newTargetDate:''
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>List of Todos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Completed</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                       {
                           this.state.todos.map(
                                todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.iscompleted.toString()}</td>
                                        <td>{todo.targetdate.toDateString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <button className="btn btn-primary" onClick={this.displayAddTodoRow}>Add Todo</button>
                </div>
                {this.state.isAddTodoRowDisplay && <div><div className="row mrgn-top-15">
                            <div className="col">
                                Description: <input type="text" id="newDescription" value={this.state.newDescription} 
                                onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row mrgn-top-15">
                            <div className="col">
                                Target Date: <input type="date" id="newTargetDate" value={this.state.newTargetDate}
                                onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row mrgn-top-15">
                            <div className="col">
                            <button className="btn btn-primary" onClick={this.addToList}>Update</button>
                            </div>
                        </div>
                     </div>
                     }
            </div>
        )
    }

    displayAddTodoRow = () => {
        this.setState((prevState) => {
            return {
                isAddTodoRowDisplay: true
            }
        })
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

    addToList = () => {
        this.setState((prevState) => {
            const id = this.state.todos.length;
            let todoList = prevState.todos;
            todoList.push({
                id:id+1, description:this.state.newDescription, iscompleted:false, targetdate: new Date(this.state.newTargetDate) 
            });
            return {
                todos : todoList,
                isAddTodoRowDisplay: false,
                newTargetDate:'',
                newDescription:''

            }
        })
    }

}

export default TodoComponent;