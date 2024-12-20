import React, { useState } from 'react';
import PostCard from './PostCard';
import './assets/css/posts.css';

function Posts() {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const posts = [
        {
            id: 1,
            title: "Post 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "https://via.placeholder.com/300x150",
            hashtags: "#ListMe #SocialMedia",
        },
        {
            id: 2,
            title: "Post 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "https://via.placeholder.com/300x150",
            hashtags: "#ListMe #SocialMedia",
        },

        {
            id: 3,
            title: "Post 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "https://via.placeholder.com/300x150",
            hashtags: "#ListMe #SocialMedia",
        },

        {
            id: 4,
            title: "Post 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "https://via.placeholder.com/300x150",
            hashtags: "#ListMe #SocialMedia",
        },
        
    ];

    return (
        <div className="posts-container">
            <div className="posts-header">
                <h1>Posts</h1>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search posts (2)"
                />
                <button className="create-button" onClick={toggleModal}>
                    Create
                </button>
            </div>

            <div className="posts-grid">
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        hashtags={post.hashtags}
                    />
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Create New Post</h2>
                        <textarea
                            placeholder="Enter your post description..."
                            className="modal-textarea"
                        ></textarea>
                        <button className="modal-close" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Posts;
