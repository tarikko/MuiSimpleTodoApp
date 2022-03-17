import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
  name: 'TodoSlice',
  initialState: {
        lastID: 0,
        todos: []
    },
  reducers: {
    add: (state, action) => {
        state.todos.push({text: action.payload, done: false, edit: false, id: state.lastID++})
    },
    remove: (state, action) => {
        state.lastID--
        state.todos.splice(action.payload, 1)
        state.todos.map((e, index) => e.id = index) 
    },
    done: (state, action) => {
        state.todos[action.payload].done = !state.todos[action.payload].done
    },
    edit: (state, action) => {
        state.todos[action.payload].edit = !state.todos[action.payload].edit
    },
    editComplete: (state, action) => {
        state.todos[action.payload.id].text = action.payload.text
        state.todos[action.payload.id].edit = false
    },
    reset: (state) => {
        state.lastID = 0
        state.todos = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { add, remove, reset, done, edit, editComplete } = TodoSlice.actions

export default TodoSlice.reducer