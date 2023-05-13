import { useState } from 'react'
import classes from './NewPost.module.css'


function NewPost({onCancel, onAddPost}){

    const [bodyText, setBodyText] = useState("");
    const [authorTitle, setAuthorTitle] = useState("");

  
    function enterBody(event) {
      setBodyText(event.target.value);
    }
  
    function enterTitle(event) {
      setAuthorTitle(event.target.value);
    }
  
    
    function submitHandler(event){
        event.preventDefault();
        const postSubmitted = {
            author: authorTitle,
            body: bodyText
        }
        onAddPost(postSubmitted)
        onCancel()
    }

 return(
    <form className={classes.form} onSubmit={submitHandler}>
      
        <p>
            <label  htmlFor="body">your message</label>
            <textarea name="body" id="body" required rows={4} onChange={enterBody}/>
        </p>
   
        <p>
            <label  htmlFor="name">your name</label>
            <input type="text" id='name' name='title' onChange={enterTitle}/>
        </p>
     

        <div className={classes.btn}>
        <button type='button' onClick={onCancel}>Cancel</button> 
        <button >Submit</button>
        </div>
       
    </form>
 )
}

export default NewPost