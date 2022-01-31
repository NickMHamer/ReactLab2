import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { useState } from "react";
import { PostForm } from "./PostForm";
import { Post } from "./Post"
import { PostInList } from "./PostInList";
import App from './App'
// const app :HTMLElement = document.getElementById('root')!
// Modal.setAppElement(document.getElementById('root')!)

export function SocialPosts(){
     
    const [show, setShow] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])

    const showPostForm = () => setShow(true)
    const closePostForm = () => setShow(false)
    
    function onDelete(index: number){
        const newArray = posts.slice(0);
        newArray.splice(index, 1)
        setPosts(newArray)
    }

    

    return (
        <div>
            <button onClick={showPostForm}>New Thought</button>
            
            <Modal isOpen={show} onRequestClose={closePostForm}>
                <PostForm onSubmit={(post)=>{setPosts(prev => [...prev, post])}} onClose={closePostForm}/>
            </Modal>

            <ul>
                {posts.map((newPost, index)=><PostInList key={index} post={newPost} onDelete={()=>onDelete(index)}/> )}
                    
            </ul>
            
        </div>
    )
}