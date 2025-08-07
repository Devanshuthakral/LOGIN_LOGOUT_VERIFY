import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import CreatePost from '../components/CreatePost';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchFeed = async () => {
    const res = await axios.get('/api/posts/feed');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <CreatePost onPostCreated={fetchFeed} />
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
