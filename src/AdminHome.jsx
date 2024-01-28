import React from 'react';
import BlogListAdmin from './AdminBlogList';
import useFetch from './usefetch';

const AdminHome = () => {
  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogListAdmin blogs={blogs} />}
    </div>
  );
};

export default AdminHome;
