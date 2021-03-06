import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO } from "../actions";

const initialState = [];

let nextId = 1;

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false
            };
            return [
                ...state,
                newTodo
            ];
        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    return action.todo;
                };
                return todo;
            });
        case TOGGLE_TODO:
            console.log(action.todoId);
            return state.map(todo => {
                if (todo.id === action.todoId) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            });
        default:
            return state;
    }
}

export default todoListReducer;