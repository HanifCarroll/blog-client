import React from "react";

export default () => (
  <>
    <div>
      <h1>New Blog</h1>
      <form action="http://localhost:8080/api/posts/" method="post">
        <input name="authorId" type="text" />
        <input name="title" type="text" placeholder="Title" />
        <textarea name="body" />
        <input type="submit" value="Post!" />
      </form>
    </div>

    <style jsx>
      {`
        input {
          display: block;
        }
      `}
    </style>
  </>
);
