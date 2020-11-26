import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, selectPost } from '../redux/actions';
// import 'Post.css';


export default function Post({ post }) {


    const dispatch = useDispatch();

    return (
        <div className="card"
            onClick={() => dispatch(selectPost(post))}>
            <div className="card-body">
                <div className="card-title">
                    POST {post.title}
                </div>
                <button
                    className="btn delete-btn"
                    onClick={() => dispatch(deletePost(post.id))}
                >X</button>
            </div>
        </div>
    );
}
