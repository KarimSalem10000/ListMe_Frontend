import React from 'react';
import './assets/css/PostCard.css';

function PostCard({ title, description, image, hashtags }) {
    return (
        <div className="post-card">
            <div className="post-header">
                <span>DRAFT</span>
                <span className="menu-icon">⋮</span>
            </div>
            <p className="post-description">{description}</p>
            <img src={image} alt="Post Visual" className="post-image" />
            <p className="post-hashtags">{hashtags}</p>
        </div>
    );
}

export default PostCard;
