import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './usefetch';

const BlogAdmin = () => {
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useNavigate();
  const allowedAuthors = ['yoshi', 'mario', 'Not Showmaker', 'admin'];

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then(() => history('/admin'));
  };

  return (
    <div className='blog-details'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          {blog.author && <p>Written by: {blog.author}</p>}
          <div>{blog.body}</div>
          {!loading && !allowedAuthors.includes(blog.author) && (
          <button onClick={handleClick}>Delete</button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogAdmin;
