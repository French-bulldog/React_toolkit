// namoid 類似於UUID  tookit 內建功能
import { createSlice, nanoid } from "@reduxjs/toolkit";

// 初始值
const initialState = {
    // todos: [{ id: 1, text: 'hello' }],
    todos: [],
    EditStatus: false,
    standByEdit: {
        id: "",
        text: "",
    }
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
                Check: false
            }
            state.todos.push(todo);
        },
        // 刪除事項
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo =>
                todo.id !== action.payload);
        },
        // 編輯模式
        editTodoStatus: (state, action) => {
            state.EditStatus = true;
            state.standByEdit.id = action.payload.id;
            state.standByEdit.text = action.payload.text;
        },
        // 取消編輯模式
        editCancelTodoStatus: (state, action) => {
            state.EditStatus = false;
        },
        // 編輯事項
        editTodo: (state, action) => {
            state.EditStatus = false;

            const updatedTodos = state.todos.map((item) => {
                if (item.id === state.standByEdit.id) {
                    return {
                        ...item,
                        text: action.payload
                    };
                }
                return item;
            });
            state.todos = updatedTodos;
        },
        // 完成事項事項
        completeTodo: (state, action) => {
            // state.EditStatus = false;

            const updatedTodos = state.todos.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        Check: !item.Check
                    };
                }
                return item;
            });
            state.todos = updatedTodos;
        },
    }
});


// 丟出每個操作
export const { addTodo, removeTodo, editTodoStatus, editCancelTodoStatus, editTodo, completeTodo } = todoSlice.actions;

// 導出整個Reducer
export default todoSlice.reducer;