import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
      My post
      <div>
        New post
        <textarea></textarea>
        <button>Add your post</button>
        </div>

      <Post />
      <Post />
      <Post />
      
    </div>)

}

export default MyPosts;