import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SocialPosts } from './SocialPosts';
import { PostInList } from './PostInList';
import Modal from 'react-modal'

// Modal.setAppElement(document.getElementById('root')!)

function App() {
  
  return (
    <div className="App">
      <SocialPosts />
    </div>
  );
}

export default App;
