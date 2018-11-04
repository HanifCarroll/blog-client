import React from "react";
import PostsList from "./PostsList";

const User = ({ user: { username, posts } }) => (
  <div>
    <h1>{username}</h1>
    <PostsList posts={posts} />
  </div>
);

export default User;
