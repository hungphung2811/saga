export const addTodo = (todo) => ({
    type: "ADD_TODO",
    paload: todo
})

export const deleteTodoSaga = (todo) => ({
    type: "DELETE_TODO_SAGA",
    paload: todo
})
