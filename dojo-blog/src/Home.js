import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setPending(false);
        setErr(null);
      })
      .catch((error) => {
        setPending(false);
        setErr(error.message);
      });
  }, []);

  return (
    <div className="home">
      {err && <div>{err}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All Blogs!'} />}
    </div>
  );
};

export default Home;
