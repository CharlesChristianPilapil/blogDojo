import React from 'react'
import { NavLink } from 'react-router-dom';

const BlogList = ({blogs}) => {

//   const blogs = props.blogs;
//   const title = props.title;

  return (
    <div className='blog-list'>
      {!blogs.length ? (
        <p></p>
      ) : (
        <>
          <h2>All Blogs</h2>
          {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <NavLink to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
              </NavLink>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default BlogList