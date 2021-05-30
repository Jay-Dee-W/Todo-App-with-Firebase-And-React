
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { useDispatch } from 'react-redux';
import { toggleDBTodo } from '../redux/actions/actions'


export default function ToDoList() {
    let dispatch = useDispatch()
    let todos = useSelector(state => state.todos)
    let filter = useSelector(state => state.filter)


    let displayTodos = filter === "Completed" ? todos.filter(todo => todo.completed === true) :
        filter === "Active" ? todos.filter(todo => todo.completed === false) :
            todos

    const handleCheck = (taskID) => {
      dispatch(toggleDBTodo(taskID))
    }

    return (
        <div className="list">
            <ul className="todo-items">
                {displayTodos.map((todo, i) => <ToDoItem key={i} id={i} content={todo.content} completed={todo.completed} checked={handleCheck} />)}
            </ul>
        </div>

    )
}
