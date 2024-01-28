import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogListAdmin = ({ blogs }) => {
  return (
    <div className='blog-list'>
      {!blogs.length ? (
        <p></p>
      ) : (
        <>
          <h2>All Blogs Admin</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <NavLink to={`/blogs/${blog.id}/admin`}>
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

export default BlogListAdmin;
