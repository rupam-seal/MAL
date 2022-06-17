import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      <BlogList blogs={blogs} title={'All Blogs!'} />
    </div>
  );
};

export default Home;
