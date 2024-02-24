import React from "react";

const commentData = [
  {
    name: "Mutan Singh",
    text: "Lorem ipsum dollar sit",
    replies: [
      {
        name: "Mutan Singh",
        text: "Lorem ipsum dollar sit",
        replies: [],
      },
      {
        name: "Mutan Singh",
        text: "Lorem ipsum dollar sit",
        replies: [
          {
            name: "Mutan Singh",
            text: "Lorem ipsum dollar sit",
            replies: [
              {
                name: "Mutan Singh",
                text: "Lorem ipsum dollar sit",
                replies: [
                  {
                    name: "Mutan Singh",
                    text: "Lorem ipsum dollar sit",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Mutan Singh",
        text: "Lorem ipsum dollar sit",
        replies: [],
      },
    ],
  },
  {
    name: "Mutan Singh",
    text: "Lorem ipsum dollar sit",
    replies: [
      {
        name: "Mutan Singh",
        text: "Lorem ipsum dollar sit",
        replies: [],
      },
      {
        name: "Mutan Singh",
        text: "Lorem ipsum dollar sit",
        replies: [
          {
            name: "Mutan Singh",
            text: "Lorem ipsum dollar sit",
            replies: [
              {
                name: "Mutan Singh",
                text: "Lorem ipsum dollar sit",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mutan Singh",
    text: "Lorem ipsum dollar sit",
    replies: [
      {
        name: "Mutan Singh",
        text: "Lorem ipsum dollar sit",
        replies: [],
      },
    ],
  },
  {
    name: "Mutan Singh",
    text: "Lorem ipsum dollar sit",
    replies: [],
  },
  {
    name: "Mutan Singh",
    text: "Lorem ipsum dollar sit",
    replies: [
      {
        name: "Mutan Singh",
        text: "Lorem ipsum dollar sit",
        replies: [
          {
            name: "Mutan Singh",
            text: "Lorem ipsum dollar sit",
            replies: [
              {
                name: "Mutan Singh",
                text: "Lorem ipsum dollar sit",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex py-2">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h3>Comments</h3>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
