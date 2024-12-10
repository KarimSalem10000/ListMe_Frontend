import React, { useState, useEffect } from "react";
import './CreateModal.css';

function CreateModal({ isOpen, toggleModal }) {
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map((file) => URL.createObjectURL(file));
        setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal" onClick={toggleModal}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()} // Prevent closing on content click
            >
                <div className="modal-header">
                    <h2>AI Social Post Generator</h2>
                    <button className="modal-close" onClick={toggleModal}>
                        ✖
                    </button>
                </div>

                <div className="modal-body">
                    <label className="input-label" htmlFor="post-description">
                        Describe your post <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="post-description"
                        placeholder="e.g., advertisement for a new FPS video game"
                        className="input-field"
                    />

                    <div className="upload-section">
                        <div className="upload-box">
                            <img
                                src="upload-image-icon.jpg"
                                alt="Upload Icon"
                                className="upload-logo"
                            />
                            <p className="upload-title">Click or drag to upload an image</p>
                            <input
                                type="file"
                                id="image-upload"
                                className="upload-input-hidden"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                            />
                        </div>

                        {uploadedImages.length > 0 && (
                            <div className="uploaded-images">
                                {uploadedImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Uploaded ${index}`}
                                        className="uploaded-image"
                                    />
                                ))}
                            </div>
                        )}
                    
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="create-post-button" onClick={toggleModal}>
                        Create Post
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateModal;
