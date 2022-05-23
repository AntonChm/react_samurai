import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
    <div>
      <img src='https://oceanfdn.org/wp-content/uploads/2010/08/SargassoSea-1-1200x600.jpg' />
    </div>
    
    <div>
      Ava + Description
    </div>

    <MyPosts />

  </div>      

}

export default Profile;