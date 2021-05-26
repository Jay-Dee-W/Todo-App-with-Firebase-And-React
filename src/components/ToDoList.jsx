
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions/actions'
import { databaseRef } from '../components/firebase-config'

export default function ToDoList() {
    let dispatch = useDispatch()
    let todos = useSelector(state => state.todos)
    let filter = useSelector(state => state.filter)


    let displayTodos = filter === "Completed" ? todos.filter(todo => todo.completed === true) :
        filter === "Active" ? todos.filter(todo => todo.completed === false) :
            todos

    const handleCheck = (taskID) => {
        let i = 0
        dispatch(toggleTodo(taskID))
        databaseRef.collection('todos').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (i === taskID) {
                        databaseRef.collection('todos').doc(doc.id).update({ completed: true })
                    }
                    i++
                })
            })
    }

    return (
        <div className="list">
            <ul className="todo-items">
                {displayTodos.map((todo, i) => <ToDoItem key={i} id={i} content={todo.content} completed={todo.completed} checked={handleCheck} />)}
            </ul>
        </div>

    )
}
