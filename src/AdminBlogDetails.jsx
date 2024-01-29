import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogAdmin = () => {
  const { id } = useParams();
  const { data: blog, error, loading } = useFetch(`https://blog-data-ucmb.onrender.com/blogs/${id}`);
  const history = useNavigate();
  const allowedAuthors = ['yoshi', 'mario', 'Not Showmaker', 'admin'];

  const handleClick = () => {
    fetch(`https://blog-data-ucmb.onrender.com/blogs/${blog.id}`, {
      method: 'DELETE'
    }).then(() => history('/admin'));
  };

  const goToAdmin = () => {
    history('/admin');
  }

  return (
    <div className='blog-details'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          {blog.author && <p>Written by: {blog.author}</p>}
          <div>{blog.body}</div>{!loading && !allowedAuthors.includes(blog.author) && (
            <>
              <button onClick={goToAdmin}>Go Back</button>
              <button onClick={handleClick}>Delete</button>
            </>
          )}
          {allowedAuthors.includes(blog.author) && (
            <button onClick={goToAdmin}> Go Back </button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogAdmin;
