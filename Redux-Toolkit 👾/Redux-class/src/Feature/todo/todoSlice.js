import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: 123, task: "demo-task", isDone: false }],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), // for uniqe ID.
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); //direct mutation.
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
         
        markDone: (state, action) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = !todo.isDone;
                } 
            });
        }
    }
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markDone } = todoSlice.actions;
export default todoSlice.reducer;