const initialTodos = [
        {id:1, description:'Learn React', iscompleted:false, targetdate: new Date()},
        {id:2, description:'Learn Redux Saga', iscompleted:false, targetdate: new Date()},
        {id:3, description:'Explor Old Import', iscompleted:false, targetdate: new Date()},
        {id:4, description:'Export New Import', iscompleted:false, targetdate: new Date()}
    ];
export default function todosReducer(state=initialTodos, action){
    switch(action.type){
        case 'todos/addTodo' : {
            return [
                ...state, 
                {
                    id: state.length + 1,
                    description: action.payload.desc,
                    iscompleted:false,
                    targetdate:action.payload.date
                }
            ]
        }
        default:
            return state
    }
}