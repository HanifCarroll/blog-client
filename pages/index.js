import React from "react";
import fetch from "isomorphic-unfetch";

const Home = ({ posts }) => (
  <div>
    <h1>Home</h1>
    <p>Welcome to Blog! Check out the latest blog posts!</p>

    {posts.map(post => (
      <li key={post.id}>
        <a href={`/post?id=${post.id}`}>
          {post.title} - {post.author.username}
        </a>
      </li>
    ))}
  </div>
);

Home.getInitialProps = async function getPosts() {
  const res = await fetch("http://localhost:8080/api/posts");
  const posts = await res.json();

  return { posts };
};

export default Home;
