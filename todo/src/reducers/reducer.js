import { ADD_TODO } from '../actions';

const initialState = {
    title: 'Redux Todo App',
    todos: [
        { todo: 'Create a redux app', completed: false, id: 1 },
        { todo: 'Push code to GitHub', completed: false, id: 2 },
        { todo: 'Complete Airtable report', completed: false, id: 3 },
        { todo: 'Attend stand up', completed: false, id: 4 }
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { todo: action.payload, completed: false, id: Date.now() }
                ]
            };
        default:
            return state;
    }
}

export default reducer;
