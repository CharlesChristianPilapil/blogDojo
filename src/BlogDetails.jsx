import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './usefetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className='blog-details'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          {blog.author && <p>Written by: {blog.author}</p>}
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;