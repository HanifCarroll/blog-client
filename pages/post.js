import React from "react";
import axios from "axios";
import Post from "../components/Post";

const ShowPost = ({ post }) => (
  <div>
    <Post post={post} />
  </div>
);

ShowPost.getInitialProps = async function getPost({ query: { id } }) {
  const { data: post } = await axios.get(
    `http://localhost:8080/api/posts/${id}`,
  );

  return { post };
};

export default ShowPost;
