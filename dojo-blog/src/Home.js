import React, { useState } from 'react';

const Home = () => {
  const blogsData = [
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ];

  const [blogs, setBlogs] = useState(blogsData);

  const content = blogs.map((blog) => {
    return (
      <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
      </div>
    );
  });

  return <div className="home">{content}</div>;
};

export default Home;
