import React from "react";

const Post = ({ post: { author, title, body } }) => (
  <div>
    <p>{author.username}</p>
    <p>{title}</p>
    <p>{body}</p>
  </div>
);

export default Post;
