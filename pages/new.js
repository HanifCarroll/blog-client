import React from "react";
import axios from "axios";
import Router from "next/router";

export default class NewPost extends React.Component {
  state = {
    authorId: "",
    title: "",
    body: "",
  };

  onChange = prop => e => this.setState({ [prop]: e.target.value });

  onSubmit = async e => {
    const { authorId, title, body } = this.state;

    e.preventDefault();

    const formData = new FormData();
    formData.set("authorId", authorId);
    formData.set("title", title);
    formData.set("body", body);

    await axios.post("http://localhost:8080/api/posts/", formData);

    Router.push("/");
  };

  render() {
    const { authorId, title, body } = this.state;

    return (
      <>
        <div>
          <h1>New Blog</h1>
          <form
            onSubmit={e => this.onSubmit(e)}
            action="http://localhost:8080/api/posts/"
            method="post"
          >
            <input
              name="authorId"
              type="text"
              value={authorId}
              onChange={this.onChange("authorId")}
            />
            <input
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={this.onChange("title")}
            />
            <textarea
              name="body"
              value={body}
              onChange={this.onChange("body")}
            />
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
  }
}
