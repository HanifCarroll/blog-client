import React from "react";
import axios from "axios";
import PostsList from "../components/PostsList";

const Home = ({ posts }) => (
  <div>
    <h1>Home</h1>
    <p>Welcome to Blog! Check out the latest blog posts!</p>
    <PostsList posts={posts} />
  </div>
);

Home.getInitialProps = async function getPosts() {
  const { data: posts } = await axios.get("http://localhost:8080/api/posts/");
  return { posts };
};

export default Home;
