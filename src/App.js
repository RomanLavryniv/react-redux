import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import { useDispatch, useSelector } from 'react-redux';
import { fethedPosts } from './redux/actions';

function App() {

  const dispatch = useDispatch();

  const selectedPost = useSelector(state => {
    return state.posts.selected;
  });

  return (
    <div className="container">
      {selectedPost?.id}
      <button 
      className="btn btn-primary"
      onClick = {() => dispatch(fethedPosts())}
      >get data</button>
      <PostForm/>
      <Posts/>
      
    </div>
  );
}

export default App;