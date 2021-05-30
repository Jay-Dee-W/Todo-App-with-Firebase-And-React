import { ADD_TODO, TOGGLE_TODO, FILTER_TODO, GET_TODOS } from "./action-types";
import { databaseRef } from '../../components/firebase-config'

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

export let getTODOS = (text) => ({
    type: GET_TODOS,
    payload: text
})

export const getDBTodos = () => {
    console.log('get thunk')
    return function (dispatch) {
        databaseRef.collection('todos').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    doc.data()
                    dispatch(getTODOS(doc.data()))
                })
            })
    }
}

export const addDBTodo = (newTodo) => {
    console.log('add thunk')
    return function (dispatch) {
        const addNewTodo = {
            content: newTodo,
            completed: false
        }
        databaseRef.collection('todos').doc().set(addNewTodo)
        dispatch(addTodo(addNewTodo))
    }
}

export const toggleDBTodo = (taskID) => {
    console.log('toggle thunk')
    return function (dispatch) {
        let i = 0
        databaseRef.collection('todos').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    if (i === taskID) {
                        databaseRef.collection('todos').doc(doc.id).update({ completed: true })
                    }
                    i++
                })
            })
        dispatch(toggleTodo(taskID))
    }
}