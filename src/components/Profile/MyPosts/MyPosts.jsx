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
      <div className={classes.posts}>
        <Post message='Hi, how are you?'  likesSumme='15'/>
        <Post message="It's my first post" likesSumme='13'/>
      </div>
    </div>)

}

export default MyPosts;