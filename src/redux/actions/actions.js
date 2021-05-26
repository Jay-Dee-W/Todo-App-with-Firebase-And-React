import { ADD_TODO, TOGGLE_TODO, FILTER_TODO , GET_DB_TODOS } from "./action-types";


export let addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})

export let toggleTodo = (text) => ({
    type: TOGGLE_TODO,
    payload: text
})

export let filterTodo = (text) => ({
    type: FILTER_TODO,
    payload: text
})

export const getDBTodos = (text) => ({
    type: GET_DB_TODOS,
    payload: text
})
