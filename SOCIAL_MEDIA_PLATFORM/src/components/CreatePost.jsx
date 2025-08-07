import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = ({ onPostCreated }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/posts', { content });
    setContent('');
    onPostCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn btn-primary mt-2" type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
