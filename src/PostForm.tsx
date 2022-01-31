import { useState } from "react";
import { Post } from "./Post";

export function PostForm(props: {onClose: () => void, onSubmit: (post: Post) => void} ){
    
    const [title, setTitle] = useState('')
    const [thought, setThought] = useState('')
    
    function handlePostTitleSubmit(e:any){
        setTitle((title)=>title=e.target.value)  
    }
    function handlePostThoughtSubmit(e:any){
        setThought((thought) => thought=e.target.value)
    }
    
    return(
        <div>
            <button onClick={props.onClose}>X</button>
            
                <label>Title</label>
                <input type='text' value={title} onChange={handlePostTitleSubmit}></input>
                <label>Thought</label>
                <input type='text' value={thought} onChange={handlePostThoughtSubmit}></input>
                <button onClick={()=>{
                    props.onSubmit({title, thought})
                    props.onClose()
                    }}>
                    Add Post</button>
            

        </div>
    )
}