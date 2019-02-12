import React from "react";

const Posts = props => {
  return props.posts.map((post, index) => {
    return (
      <div className="posts-wrapper" key={index}>
        <h4>Title: {post.title} </h4>
        <p> Contents: {post.contents} </p>
      </div>
    );
  });
};
export default Posts;
