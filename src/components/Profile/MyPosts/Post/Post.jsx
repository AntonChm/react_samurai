import classes from './Post.module.css';

const Post = (props) => {
  

    return (    
        <div className={classes.item}>

          <img src='https://data.cyclowiki.org/images/thumb/2/26/Aang.jpg/220px-Aang.jpg' />
          
          { props.message }

          <div>
            <span>likes = { props.likesSumme }</span>
          </div>
          
        </div>      
    )
}

export default Post;