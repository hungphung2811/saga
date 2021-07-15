import todos from './data'

const appReducer = (state = todos, action) => {
    switch (action.type) {
        case "ADD_TODO_SAGA":
            return [...state, action.paload]
        case "DELETE_TODO_SAGA":
            const newTodos = [...state]
            return newTodos.filter(todo => todo.id !== action.paload)
        default:
            return state;
    }
}
export default appReducer