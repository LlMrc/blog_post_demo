import classes from './MainHeader.module.css'



function MainHeader({onCreatePost}) {
  
 
    return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        {/* <MdMessage /> */}
        React header
      </h1>
      <p>
        <button  className={classes.btn} onClick={onCreatePost} >
          {/* <MdPostAdd size={18} /> */}
          New Post
        </button>
      </p>
    </header>
  );
}
export default MainHeader