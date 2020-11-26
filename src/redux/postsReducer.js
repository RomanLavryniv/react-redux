import { CREATE_POST, DELETE_POST, FETCH_POSTS, SELECT_POST } from "./types";

const initialState = {
    data: [],
    selected: null
}

export const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_POST:
            return {...state, data: [...state.data, action.payload]};
    
            case FETCH_POSTS:
                return {...state, data: action.payload}

            case DELETE_POST:
                return {...state, data: state.data.filter(post => post.id !== action.payload)}


                case SELECT_POST:
                    return{...state, selected: action.payload}
                    
        default:
            return state;
    }
}