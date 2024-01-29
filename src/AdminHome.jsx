import React from 'react';
import BlogListAdmin from './AdminBlogList';
import useFetch from './useFetch';

const AdminHome = () => {
  const { data: blogs, loading, error } = useFetch('https://blog-data-ucmb.onrender.com/blogs');

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogListAdmin blogs={blogs} />}
    </div>
  );
};

export default AdminHome;
