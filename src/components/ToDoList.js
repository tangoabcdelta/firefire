import React from "react";
import ToDo from "../atoms/ToDo";
import TodoStore from "../store/ToDoStore";
import dispatcher from "../store/dispatcher";


class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
    }
    
    componentDidMount() {
        
        TodoStore.on('change', ()=> {
            console.log('Change event fired');
            this.setState({
                todos: TodoStore.getAll()
            });
        });
    }
    
    callCreateToDo() {
        // TodoStore.createToDo('Foo');
        dispatcher.dispatch({
            type: "CREATE",
            data: "Foo"
        });
    }
    
    deleteToDo(id) {
        // TodoStore.deleteToDo(id);
        dispatcher.dispatch({
            type: "DELETE",
            data: id
        });
    }

    render() {
        
        const { todos } = this.state;
        const ToDoComponents = todos.map((todo) => {
            return <ToDo key={todo.id} uniquekey={todo.id} {...todo} delete={this.deleteToDo.bind(this, todo.id)} />;
        });

        return (
        <div>
            <h1>ToDos</h1>
            <ul>
                {ToDoComponents}
            </ul>
            <br />
            <button onClick={this.callCreateToDo.bind(this)}>Add</button>
        </div>
        );
    }

}

export default ToDoList;
