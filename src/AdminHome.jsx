import React from 'react';
import BlogListAdmin from './AdminBlogList';
import useFetch from './useFetch';

const AdminHome = () => {
  const { data: blogs, loading, error } = useFetch('https://blog-data-1kr8.onrender.com/blogs');

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogListAdmin blogs={blogs} />}
    </div>
  );
};

export default AdminHome;
