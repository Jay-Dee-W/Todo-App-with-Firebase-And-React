import { ADD_TODO, FILTER_TODO, GET_DB_TODOS, TOGGLE_TODO } from '../actions/action-types'

let initialState = {
    todos: [],
    filter: 'All'
}

export default function todoReducer(state = initialState, action) {

    let todosCopy = JSON.parse(JSON.stringify(state.todos))

    switch (action.type) {
        case ADD_TODO:
            todosCopy.push({ content: action.payload, completed: false })
            return { ...state, todos: todosCopy }
        case TOGGLE_TODO:
            todosCopy[action.payload].completed = !todosCopy[action.payload].completed
            return { ...state, todos: todosCopy }
        case FILTER_TODO:
            return { ...state, filter: action.payload }
        case GET_DB_TODOS:
            todosCopy.push({ ...action.payload })
            return { ...state, todos: todosCopy }
        default:
            return state
    }
}