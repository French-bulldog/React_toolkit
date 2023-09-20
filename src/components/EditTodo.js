import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editCancelTodoStatus, editTodo } from '../features/todo/todoSlice'
import { useSelector } from 'react-redux'

const EditTodo = () => {

    const [input, setInput] = useState(useSelector((state) => state.todo.standByEdit)); // 使用者輸入，初始值得到待修改值
    const dispatch = useDispatch();
    const [shownotice, setShowNotice] = useState('modal'); // 顯示警告
    const standByTodo = useSelector((state) => state.todo.standByEdit); // 得到待修改值

    useEffect(() => {
        if (input === "") {
            setShowNotice('modal');
        }
        else {
            setShowNotice('');
        }
    }, [input])

    useEffect(() => {
        setInput(standByTodo);
    }, [standByTodo])


    // 編輯內容按鈕
    const editTodoHandler = (e) => {

        if (input != "") {
            dispatch(editTodo(input));
        }
        else {

        }
    }

    // 取消編輯狀態按鈕
    const editTodoCancelHandler = (e) => {
        dispatch(editCancelTodoStatus());
    }

    return (
        <div className='EditTodo'>
            <input placeholder='Enter Edit Todo...'
                value={input.text}
                onChange={(e) => setInput(e.target.value)}></input>
            <div class="button-container">
                <button type="submit" class="glow-button" data-bs-toggle={`${shownotice}`} data-bs-target="#exampleModal"
                    onClick={() => {
                        editTodoHandler();
                    }}>
                    Edit
                </button>
            </div>
            <div class="XX button-container">
                <button type="button" className='glow-button'
                    onClick={() => editTodoCancelHandler()}>
                    X
                </button>
            </div>
        </div >
    )
}

export default EditTodo