import React, { useState } from "react";
import "../src/css/Blog.css";

function Blog() {
   const styles = {
    textAlign: "center",
  };
  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPosts([...posts, { title, content }]);
    setTitle("");
    setContent("");
  }

  function handleDelete(index) {
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  }

  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="blog-input"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog post here..."
          className="blog-textarea"
        />
        <button type="submit" className="blog-button">
          Submit
        </button>
      </form>
      <hr />
       <h1 style={styles}>Blogs</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post-container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button
              onClick={() => handleDelete(index)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
