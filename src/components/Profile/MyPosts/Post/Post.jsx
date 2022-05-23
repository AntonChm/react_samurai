import classes from './Post.module.css';

const Post = () => {
    return (    
        <div className={classes.item}>

          <img src='https://data.cyclowiki.org/images/thumb/2/26/Aang.jpg/220px-Aang.jpg' />
          
          Post1

          <div>
            <span>like</span>
          </div>
          
        </div>      
    )
}

export default Post;