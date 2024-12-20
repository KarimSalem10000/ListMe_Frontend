import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/postDetails.css";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error("Failed to fetch post details:", error);
      }
    };

    fetchPostDetails();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p><strong>Author:</strong> {post.author.username}</p>
      <p><strong>Created At:</strong> {new Date(post.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default PostDetails;
