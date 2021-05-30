
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import {addDBTodo } from '../redux/actions/actions'



export default function AddToDo() {
    let [todoName, setTodoName] = useState('')

    let dispatch = useDispatch()

    function addTodoData(todoName) {
        dispatch( addDBTodo(todoName) )
        setTodoName('')
    }
    return (
        <div className="add-todo">
            <input  type="text" name='todoName' value={todoName} onChange={(e) =>  setTodoName(e.target.value)}/>
            <button onClick={() => addTodoData(todoName) }>Add</button>
        </div>
    )
}
 