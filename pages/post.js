import React from "react";
import fetch from "isomorphic-unfetch";
import Post from "../components/Post";

const ShowPost = ({ post }) => (
  <div>
    <Post post={post} />
  </div>
);

ShowPost.getInitialProps = async function getPost({ query: { id } }) {
  const res = await fetch(`http://localhost:8080/api/posts/${id}`);
  const post = await res.json();

  console.log(post);
  return { post };
};

export default ShowPost;
