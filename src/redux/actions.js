import { CREATE_POST, DELETE_POST, FETCH_POSTS, SELECT_POST } from "./types";

export function createPost(post) {

    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fethedPosts() {

    return async dispatch => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await resp.json();

        dispatch({
            type: FETCH_POSTS,
            payload: data
        });
    }
}

export function deletePost(id) {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export function selectPost(post) {
    return {
        type: SELECT_POST,
        payload: post
    }
}