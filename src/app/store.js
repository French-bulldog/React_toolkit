import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import logger from "redux-logger"; // 导入redux-logger

const middleware = [...getDefaultMiddleware(), logger]; // 将redux-logger添加到middleware数组中

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
    middleware,
});
