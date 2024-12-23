import React, { useState } from "react";
import axios from "axios";
import "../assets/css/ai.css";

const Ai = () => {
    const [image, setImage] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState(""); // Fix capitalization error
    const [loading, setLoading] = useState(false);

    // Handle image selection
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state
    
        try {
            let data; // Unified data variable to store API response
    
            // Pre-text included in the prompt
            const socialMediaPrompt = `
            Your task is to generate captions suitable for Instagram, Twitter, and Facebook. 
            The captions should fit the tone and length common to each platform. 
            Input for the captions: "${prompt}"
            Provide separate suggestions for each platform:
            `;
    
            if (image) {
                // Handle image + text input
                const formData = new FormData();
                formData.append("image", image);
                formData.append("prompt", socialMediaPrompt);
    
                const res = await axios.post("/api/ai/gemini-pro-vision", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                data = res.data; // Assign response to `data`
            } else {
                // Handle text input only
                const res = await axios.post("/api/ai/gemini-pro", { prompt: socialMediaPrompt });
                data = res.data; // Assign response to `data`
            }
    
            // Set the response text
            setResponse(data.text);
        } catch (error) {
            console.error("Error generating response:", error);
    
            // Fallback template for failure
            setResponse(
                "Failed to generate response. Here’s an example caption:\n" +
                "Instagram: Amazing vibes! 🌟 #Motivation #Inspiration\n" +
                "Twitter: Quick thoughts on success - Focus. Hustle. Achieve. 💼\n" +
                "Facebook: What motivates you every day? Let's share ideas! 💡"
            );
        } finally {
            setLoading(false); // Reset loading state
        }
    };
    

    return (
        <div className="ai-container">
            <h1>AI Response Generator</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Enter your prompt here..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                />
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit" disabled={loading}>
                    {loading ? "Generating..." : "Generate Response"}
                </button>
            </form>

            {/* Display generated response */}
            {response && (
                <div className="response-output">
                    <h2>Generated Response:</h2>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
};

export default Ai;
