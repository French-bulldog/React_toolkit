import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [input, setInput] = useState(''); // 使用者輸入
    const dispatch = useDispatch();
    const [shownotice, setShowNotice] = useState('modal'); // 顯示警告

    useEffect(() => {
        if (input === "") {
            setShowNotice('modal');
        }
        else {
            setShowNotice('');
        }
    }, [input])


    // 新增按鈕
    const addTodoHandler = (e) => {
        e.preventDefault();

        if (input != "") {
            dispatch(addTodo(input));
            setInput('');
        }
        else {

        }
    }

    return (
        <form className='AddTodo' onSubmit={addTodoHandler}>
            <input placeholder='Enter a Todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}></input>
            <div className="button-container">
                <button type="submit" class="glow-button" data-bs-toggle={`${shownotice}`} data-bs-target="#exampleModal">
                    Add Todo
                </button>
            </div>
        </form>
    )
}

export default AddTodo