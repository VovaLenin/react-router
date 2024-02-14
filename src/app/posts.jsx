import React from "react";
import Post from "./components/post";
import PostsList from "./components/postsList";
import { useParams, useLocation } from "react-router-dom";
import query from "query-string";
import _ from "lodash";

const Posts = () => {
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" },
  ];
  const params = useParams();
  const location = useLocation();
  const { postId } = params;
  const search = query.parse(location.search);

  //   http://localhost:3000/posts?sortBy=newest&count=1
  const cropPosts =
    search.count !== undefined
      ? _(posts).slice(0).take(search.count).value()
      : posts;
  return postId ? (
    <Post posts={cropPosts} id={postId} />
  ) : (
    <PostsList posts={cropPosts} />
  );
};

export default Posts;
