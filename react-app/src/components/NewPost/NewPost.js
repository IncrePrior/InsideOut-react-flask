import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createSinglePostThunk, getAllPostsThunk } from "../../store/post";
import { useModal } from "../../context/Modal";
import "./NewPost.css";

export default function NewPost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [errors, setErrors] = useState([]);
  const [frontendErrors, setFrontendErrors] = useState({});
  const [dragging, setDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("Drag and drop or");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const frontendErrors = {};
    if (!photo) frontendErrors.images = "Photo is required.";
    if (!title) frontendErrors.title = "Title is required.";
    if (title.length > 60) frontendErrors.name = "Title can not be longer than 60";
    if (!text) frontendErrors.text = "Message is required.";
    if (text.length > 1000) frontendErrors.text = "Message cannot be longer than 1000 characters";
    setFrontendErrors(frontendErrors);
  }, [photo, title, text]);



  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setPhoto(file);
    setUploadStatus("Photo ready for upload");
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setUploadStatus("Photo ready for upload");
    const reader = new FileReader();
    reader.onload = (e) => {
      setPhotoPreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true)

    if (Object.keys(frontendErrors).length > 0) return;

    let formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("photo", photo);

    if (!photo) {
      console.log("Photo required");
      return;
    }

    await dispatch(createSinglePostThunk(formData));
    await dispatch(getAllPostsThunk());

    setLoading(false)

    closeModal();
    await history.push("/posts");
  };



  const loadingClass = loading ? "is-loading" : "not-loading"


  return (
    <div className="new-post-main-container">

      <img
        className="INSIDEOUT-logo2"
        alt=""
        src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
      ></img>
      <div className="new-h1">New Post</div>



      <form onSubmit={handleSubmit} encType="multipart/form-data" className="login-form1">
        <div className="new-post-form">

          <div className="photo-container">
            <div
              id="drop-area"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={dragging ? "dragging" : ""}
            >
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="Photo Preview"
                  style={{ maxWidth: "100%" }}
                />
              ) : (
                uploadStatus
              )}
            </div>
            <div className="choose-file">
              {!photoPreview && (
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  onChange={handleFileSelect}
                />
              )}
            </div>
            {frontendErrors.images && submitted && (
              <p className="errors">{frontendErrors.images}</p>
            )}
          </div>


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
                {/* Message */}
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
              <button type="submit" className="submit-button">CREATE NEW POST</button>
            </div>
          </div>
        </div>
      </form>
    <div className={loadingClass}>LOADING...</div>
    </div>
  );
}
