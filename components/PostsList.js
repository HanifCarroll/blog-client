import React from "react";

const PostsList = function postsList({ posts }) {
  return posts.map(post => (
    <li key={post.id}>
      <a href={`/post?id=${post.id}`}>
        {post.title} - {post.author.username}
      </a>
    </li>
  ));
};

export default PostsList;
