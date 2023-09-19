// namoid 類似於UUID  tookit 內建功能
import { createSlice, nanoid } from "@reduxjs/toolkit";

// 初始值
const initialState = {
    todos: [{ id: 1, text: 'hello' }],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        // 新增事項
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo);
        },
        // 刪除事項
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo =>
                todo.id !== action.payload);
        }
    }
});


// 丟出每個操作
export const { addTodo, removeTodo } = todoSlice.actions;

// 導出整個Reducer
export default todoSlice.reducer;