
import cssStyle from './Post.module.css'
function Post({author, body}){

   return (
   <li className={cssStyle.post}>
   <p className={cssStyle.author}>{author}</p>
   <p>{body}</p>
   </li>
   )
}
export default Post