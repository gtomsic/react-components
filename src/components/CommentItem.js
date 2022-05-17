import React from "react";

const CommentItem = ({ name, time, body, image }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={image} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">{body}</div>
      </div>
    </div>
  );
};

export default CommentItem;
