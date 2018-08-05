import {
    SET_TODO_TEXT,
    ADD_TODO,
    SET_EDITING_TODO,
    UPDATE_TODO
} from "../actions";

const initialState = {
    id: null,
    text: '',
    done: false
};

const editingTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TODO:
        case UPDATE_TODO:
            return initialState;
        case SET_EDITING_TODO:
            return action.todo;
        default:
            return state;
    }
}

export default editingTodoReducer;