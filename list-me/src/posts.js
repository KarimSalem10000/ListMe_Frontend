import React, { useState } from 'react';
import PostCard from './PostCard';
import './posts.css';
import CreateModal from './CreateModal';

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
            image: "example.png",
            hashtags: "#ListMe #SocialMedia",
        },
        {
            id: 2,
            title: "Post 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "example.png",
            hashtags: "#ListMe #SocialMedia",
        },

        {
            id: 3,
            title: "Post 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "example.png",
            hashtags: "#ListMe #SocialMedia",
        },

        {
            id: 4,
            title: "Post 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "example.png",
            hashtags: "#ListMe #SocialMedia",
        },
        {
            id: 4,
            title: "Post 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e",
            image: "example.png",
            hashtags: "#ListMe #SocialMedia",
        },
        
    ];

    return (
        <div className="posts-container">
            <div className="posts-header">
            <div className='posts-title'>Posts</div>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search posts (2)"
                />
                <button className="create-post-button" onClick={toggleModal}>
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

            <CreateModal isOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
    );
}

export default Posts;
