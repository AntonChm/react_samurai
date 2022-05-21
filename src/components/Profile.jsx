import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
    <div>
      <img src='https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg' />
    </div>
    
    <div>
      Ava + Description
    </div>

    <div>
      My post
      <div>New post</div>

      <div className={classes.posts}>
        <div className={classes.item}>Post1</div>
        <div className={classes.item}>Post2</div>
        <div className={classes.item}>Post3</div>
      </div>
    </div>

  </div>      

}

export default Profile;