import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  const { data: blogs, loading, error } = useFetch('https://blog-data-ucmb.onrender.com/blogs');

  return (
    <div className="home">
        <div className="home">
          {error && <div> { error } </div>}
          {blogs && <BlogList blogs={blogs} />}
          { loading && <div> Loading... </div> }
        </div>
    </div>
  );
};

export default Home;
