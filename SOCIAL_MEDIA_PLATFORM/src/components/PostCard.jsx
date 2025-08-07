import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="card bg-base-100 shadow mb-4">
      <div className="card-body">
        <div className="flex items-center gap-3 mb-2">
          <img src={post.user?.profilePic || 'https://placehold.co/40'} className="rounded-full w-10 h-10" />
          <div>
            <h3 className="font-semibold">{post.user?.name}</h3>
            <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        </div>
        <p>{post.content}</p>
        {post.imageUrl && <img src={post.imageUrl} alt="Post" className="mt-2 rounded" />}
      </div>
    </div>
  );
};

export default PostCard;
