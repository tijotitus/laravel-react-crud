import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPostForm = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    // Fetch the post data when the component mounts
    useEffect(() => {
        axios.get(`/api/posts/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setBody(response.data.body);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/posts/${id}`, { title, body }) // Send PUT request to update the post
            .then(() => {
                navigate('/'); // Redirect to the post list after successful update
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // Handle title input
                />
            </div>
            <div>
                <label>Body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)} // Handle body input
                ></textarea>
            </div>
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPostForm;
