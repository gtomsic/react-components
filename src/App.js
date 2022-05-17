import React from "react";
import faker from "@faker-js/faker";

const App = () => {
  console.log(faker.image.avatar());
  const image = faker.image.avatar();
  return (
    <div>
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src={image} alt="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">Today at 6:00PM</span>
            </div>
            <div className="text">Nice Blog Post!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
