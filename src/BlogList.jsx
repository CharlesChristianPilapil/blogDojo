import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <div className='blog-list'>
      {!blogs.length ? (
        <p></p>
      ) : (
        <>
          <h2>All Blogs</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <NavLink
                to={blog.author === 'admin' ? '/admin' : `/blogs/${blog.id}`}
                onClick={() => {
                  // Additional logic if needed before navigation
                  // For example, tracking analytics, sending events, etc.
                }}
              >
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
              </NavLink>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BlogList;