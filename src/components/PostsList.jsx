import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [newPost, setNewPost] = useState([]);

  function addPostHandler(postData) {
    setNewPost((existingPost) => [postData, ...existingPost]);
  }
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : (
        false
      )}

      {newPost.length > 0 && (
        <ul className={classes.posts}>
          {newPost.map((post) => (
            <Post key={post.author} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {newPost.length === 0 && (
        <div style={{ textAlign: "center", color: "#fefeff" }}>
          <h2>There are no post yet!</h2>
          <h2>Add some</h2>
        </div>
      )}
    </>
  );
}

export default PostsList;
