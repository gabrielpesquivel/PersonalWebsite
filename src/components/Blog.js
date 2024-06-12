import React from 'react';
import './Blog.css'; // Add your CSS file for styling

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'My First Blog Post',
      date: 'June 12, 2024',
      content: 'What do people actually talk about in their blog posts? I have no idea...'
    }
    // Add more posts here
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id} className="blog-post">
          <h2>{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
