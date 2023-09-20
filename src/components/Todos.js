import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RemoveTodo from './RemoveTodo';
import EditTodo_start from './EditTodo_start';
import CompleteTodo from './CompleteTodo';

const Todos = () => {
    // const [todos, setTodos] = useState(useSelector((state) => state.todo.todos));
    // const let 接收Redux值使用可以被重新渲染，hook裝值則不能 如state
    const todos = useSelector((state) => state.todo.todos);

    return (
        <div className='Todos w-100'>
            <br />
            <h1>Todos</h1>
            <hr></hr>
            {
                todos.map((item) => {
                    return (
                        <>
                            <div className='main' key={item.id}>
                                <div className='container_1'>

                                    {
                                        item.Check ?
                                            <s className='TodoText line-through' data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample">{item.text}</s>
                                            : <p className='TodoText' data-bs-toggle="collapse" data-bs-target={`#collapseExample${item.id}`} aria-expanded="false" aria-controls="collapseExample">{item.text}</p>
                                    }
                                    <CompleteTodo id={item.id} />
                                    <RemoveTodo id={item.id} />
                                    <EditTodo_start id={item.id} text={item.text} />
                                </div>
                            </div>
                            <div className='collapse_main'>
                                <div class="collapse" id={`collapseExample${item.id}`}>
                                    <div class="card card-body">
                                        {item.text}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

            {/* <p class="d-inline-flex gap-1">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Button with data-bs-target
                </button>
            </p> */}
        </div>
    )
}

export default Todos