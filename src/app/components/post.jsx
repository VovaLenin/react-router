import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ posts, id }) => {
  const post = posts.find((item) => String(item.id) === id);
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/posts", { replace: true });
  };
  return (
    <>
      <h3>{post ? "Post " + post.id : `Пост с ID: ${id} не существует`}</h3>
      <p>{post ? post.label : ""}</p>
      <button onClick={() => handleSave()}>Сохранить</button>
    </>
  );
};

export default Post;
