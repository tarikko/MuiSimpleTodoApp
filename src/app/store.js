import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from '../features/todo/TodoSlice'

export default configureStore({
    reducer: {
        todo: TodoSlice
    }
});