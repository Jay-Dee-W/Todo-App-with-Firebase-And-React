import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDBTodos, filterTodo } from '../redux/actions/actions'


export default function Main() {
    let dispatch = useDispatch()

    let [currentSelection, setCurrentSelection] = useState('All');

    let updateSelection = (newItem) => {
        setCurrentSelection(newItem);
        dispatch(filterTodo(newItem))
    }


    useEffect(() => {
        dispatch(getDBTodos())
        // eslint-disable-next-line 
    }, [])

    return (

        <div className="container">
            <h2>Get it done! </h2>
            <AddToDo />
            <ToDoList />
            <div className="filter-container">
                Show:
                    <FilterItem updateSelection={updateSelection} text={'All'} currentSelection={currentSelection} />
                    <FilterItem updateSelection={updateSelection} text={'Active'} currentSelection={currentSelection} />
                    <FilterItem updateSelection={updateSelection} text={'Completed'} currentSelection={currentSelection} />
            </div>
        </div>

    )

}

function FilterItem({ text, currentSelection, updateSelection }) {
    return (
        <li onClick={(e) => updateSelection(text)} className={currentSelection === text ? 'active' : ''}>{text}</li>
    )
}
