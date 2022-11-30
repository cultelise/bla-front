import React, { useState, useEffect } from 'react';
import Input from './Input';
import blogService from '../services/blogs';
import Display from './Display';

const Form = () => {
  const [blogs, setBlogs] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newLikes, setNewLikes] = useState('');

  useEffect(() => {
    const getInitialBlogs = async () => {
      const initialBlogs = await blogService.getAll();
      setBlogs(initialBlogs);
    };
    getInitialBlogs();
  }, []);

  const getNewTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const getNewAuthor = (event) => {
    setNewAuthor(event.target.value);
  };

  const getNewUrl = (event) => {
    setNewUrl(event.target.value);
  };

  const getNewLikes = (event) => {
    setNewLikes(event.target.value);
  };

  const addBlog = async (event) => {
    event.preventDefault();
    const newBlogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
      likes: newLikes,
    };
    const returnedBlog = await blogService.create(newBlogObject);
    setBlogs(blogs.concat(returnedBlog));
    setNewTitle('');
    setNewAuthor('');
    setNewUrl('');
    setNewLikes('');
  };

  const handleKeyDown = (event) => {
    console.log(event.target);
    if (event.key === 'enter') addBlog();
  };

  return (
    <div>
      <h2>Add Blog</h2>
      <form onSubmit={addBlog}>
        <Input name={'title: '} value={newTitle} onChange={getNewTitle} />
        <Input name={'author: '} value={newAuthor} onChange={getNewAuthor} />
        <Input name={'url: '} value={newUrl} onChange={getNewUrl} />
        <Input name={'likes: '} value={newLikes} onChange={getNewLikes} />
        <button type='submit' onKeyDown={handleKeyDown}>
          submit
        </button>
      </form>
      <h2>Blog List</h2>
     {blogs.map(blog => {
      return <Display 
      key={blog.id}
      title={blog.title}
      author={`Author: ${blog.author}`}
      url={`URL: ${blog.url}`}
      likes={`Likes: ${blog.likes}`} 
      />
     })}
    </div>
  );
};

export default Form;