import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import AlertMessage from '../common/AlertMessage';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => setPosts(resp.data))
      .catch((err) => setError(true));
  }, []);

  if(error) return <AlertMessage variant="danger" text="Error has occured" />;

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
