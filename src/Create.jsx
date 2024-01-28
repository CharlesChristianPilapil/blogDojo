import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author}

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "Application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setLoading(false);
      // history.go(-1);
      history('/');
    })
  }


  return (
    <div className='create'>
        <h2> Add a new Blog </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title'> Blog title: </label>
          <input id='title' type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>

          <label htmlFor='body'> Blog body: </label>
          <textarea id='body' required onChange={(e) => setBody(e.target.value)} placeholder='Body'></textarea>

          <label htmlFor='author'> Blog author: </label>
          <input id='author' type="text" required onChange={(e) => setAuthor(e.target.value)} placeholder='Custom Author'/>

          {/* <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario"> mario </option>
            <option value="yoshi"> yoshi </option>
            <option value="luigi"> luigi </option>
          </select> */}

          {!loading && <button> Add Blog </button>}
          {loading && <button disabled> Adding Blog... </button>}

        </form>
    </div>
  )
}

export default Create