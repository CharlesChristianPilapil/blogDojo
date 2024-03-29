import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { data: blog, error, loading } = useFetch(`https://blog-data-ucmb.onrender.com/blogs/${id}`);

  const goBack = () => {
    history('/');
  }

  return (
    <div className='blog-details'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          {blog.author && <p>Written by: {blog.author}</p>}
          <div>{blog.body}</div>
          {blog.author && <button onClick={goBack}> Go Back </button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;