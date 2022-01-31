import { Post } from './Post'
export function PostInList(props: {post: Post, onDelete: () => void}){

    
    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.thought}</p>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}