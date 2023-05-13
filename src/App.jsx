import PostsList from "./components/PostsList";
import Header from "./components/MainHeader";
import { useState } from "react";

function App() {

  const [isvisible, setHideModal] = useState(false);

  function hideModalHandler() {
    setHideModal(false);
  }
 
  function showModalHandler() {
    setHideModal(true);
  }

  return (
    <>
      <Header onCreatePost={showModalHandler}/>
      <main>
        <PostsList isPosting={isvisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
