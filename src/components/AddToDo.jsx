
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import {addTodo } from '../redux/actions/actions'
import { databaseRef } from '../components/firebase-config'


export default function AddToDo() {
    let [todoName, setTodoName] = useState('')

    let dispatch = useDispatch()

    function addTodoData(todoName) {
        dispatch( addTodo(todoName) )
        const newTodo = {
            content: todoName,
            completed: false
        }
        databaseRef.collection('todos').doc().set(newTodo)
        setTodoName('')
    }
    return (
        <div className="add-todo">
            <input  type="text" name='todoName' value={todoName} onChange={(e) =>  setTodoName(e.target.value)}/>
            <button onClick={() => addTodoData(todoName) }>Add</button>
        </div>
    )
}
 