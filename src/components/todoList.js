import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { deleteTodoSaga } from '../redux/app.action';

function TodoList() {
    const todos = useSelector(state => state.app)
    const dispatch = useDispatch()
    return (
        <>
            {
                todos.map((todo, index) => {
                    return <div key={index}>
                        <p>{todo.name}</p>
                        <button onClick={
                            ()=>dispatch(deleteTodoSaga({id:todo.id}))
                        }>xoa</button>
                    </div>
                })
            }
        </>
    )
}

export default TodoList
