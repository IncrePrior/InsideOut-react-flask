import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editSinglePostThunk } from "../../store/post";
import { useModal } from "../../context/Modal";
import "./EditPost.css";

export default function EditPost() {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const user = useSelector((state) => state.session.user);
    const post = useSelector((state) => state.posts.singlePost);


    console.log('EditPost component rendering');

    const [title, setTitle] = useState(post.title || "");
    const [text, setText] = useState(post.text || "");
    const [photo, setPhoto] = useState(null);
    const [errors, setErrors] = useState([]);
    const [frontendErrors, setFrontendErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const frontendErrors = {};

        if (!photo) {
            frontendErrors.photo = "Photo is required.";
        }
        if (!title) {
            frontendErrors.title = "Title is required.";
        }
        if (title.length > 60) {
            frontendErrors.title = "Title can not be longer than 60";
        }
        if (!text) {
            frontendErrors.text = "Message is required.";
        }
        if (text.length > 1000) {
            frontendErrors.text = "Message cannot be longer than 1000 characters";
        }

        setFrontendErrors(frontendErrors);
    }, [photo, title, text]);

    const handleSubmit = async (e) => {

    console.log('Submit button clicked');

    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(frontendErrors).length > 0) {
        return;
    }

    let formData = new FormData();

    formData.append("title", title);
    formData.append("text", text);
    formData.append("photo", photo);

    try {
        const editPost = await dispatch(editSinglePostThunk(post.id, formData));
        if (editPost && editPost.errors) {
        setErrors(editPost.errors);
        } else {
            closeModal();
        }
        } catch (error) {
            console.error("An error occurred:", error.message);
        }
    };


    const cancelEdit = () => {
        closeModal();
    };



    return (
        <div className="new-post-main-container1">
            <img
                className="INSIDEOUT-logo2"
                alt=""
                src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
            ></img>
            <div className="new-h1">Edit Post</div>
                <div className="content-container">
                    <div className="photo-container1">
                        <img className="photo-in-container1" src={post.photoUrl} alt={post.title} />
            </div>
                <div className="all-text-container">
                    <form onSubmit={handleSubmit} className="login-form1">
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                <div className="new-post-details">
                    {frontendErrors.title && submitted && (
                        <p className="errors">{frontendErrors.title}</p>
                    )}
                <div className="new-post-form1">
                    <label className="login-label">
                        Title
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            {frontendErrors.text && submitted && (
                <p className="errors">{frontendErrors.text}</p>
            )}
            <label className="login-label">
                <textarea
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write your message about this post."
                    required
                />
            </label>
            </div>

            <div className="login-button">
                <button type="submit" className="submit-button" onClick={handleSubmit}>
                    EDIT POST
                </button>
                <button type="button" className="submit-button" onClick={cancelEdit}>
                    CANCEL
                </button>
            </div>
            </div>
            </form>
        </div>
    </div>
    </div>
);
}
