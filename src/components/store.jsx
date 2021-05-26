import { createContext, useReducer, useRef } from "react";



let TodosContext = createContext({})

export default TodosContext;



const reducer = (state, action) => {
    
    console.log('state', state, 'action', action )
    switch (action.type) {
        case 'ADD-TODO':
            let todoCopy = state.todos.slice()
            todoCopy.push( { content: action.payload, completed: false })
            return {
                todos: todoCopy
                
            }
        default:
            return state;
    }
}




export function TodosContextProvider(props) {
    let initialState = {
        todos: 
            [{id: 0, content: "test", completed: false}]
        
    }
    let [todoState,dispatch] = useReducer(reducer, initialState)
    return (
        <TodosContext.Provider value={{
            todoState,
            dispatch
        }}>
            {props.children}
        </TodosContext.Provider>
    )
}

