import React from "react";
import faker from "@faker-js/faker";
import CommentItem from "./components/CommentItem";
import ApprovalCard from "./components/ApprovalCard";

const comments = [
  { name: "Sam", time: "Today at 6:00PM", body: "Nice blog post!" },
  {
    name: "Jerry",
    time: "Yesterday at 4:10PM",
    body: `What's up madlang people.`,
  },
  {
    name: "Ivan",
    time: "Tuesday at 7:00AM",
    body: "This is getting good now.",
  },
];

const App = () => {
  const renderedComments = comments.map((comment) => (
    <ApprovalCard key={comment.name}>
      <CommentItem
        name={comment.name}
        time={comment.time}
        body="Nice blog post!"
        image={faker.image.avatar()}
      />
    </ApprovalCard>
  ));
  return (
    <div>
      <div className="ui container comments">{renderedComments}</div>
    </div>
  );
};

export default App;
