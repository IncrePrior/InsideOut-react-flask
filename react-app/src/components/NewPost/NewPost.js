// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { createSinglePostThunk, getSinglePostThunk } from "../../store/post";
// import { useModal } from "../../context/Modal";
// import "./NewPost.css";

// export default function NewPost() {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { closeModal } = useModal();
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [previewPhoto, setPreviewPhoto] = useState(null);
//   const [errors, setErrors] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('text', text);
//     formData.append('photo', photo);

//     const newPost = await dispatch(createSinglePostThunk(formData));
//     if(newPost.errors) {
//       setErrors(newPost.errors);
//       setLoading(false);
//     };

//     if(newPost && !newPost.errors) {
//       dispatch(getSinglePostThunk(newPost.id));
//       closeModal();
//       history.push(`/posts/${newPost.id}`);
//       setLoading(false);
//     };
//   };

//   const fileWrap = (e) => {
//     e.stopPropagation();
//     const tempFile = e.target.files[0];
//     setPhoto(tempFile);
//     const newImageURL = URL.createObjectURL(tempFile);
//     setPreviewPhoto(newImageURL);
//   };

//   return (
//     <div className="new-post-main-container">
//       <img
//         className="INSIDEOUT-logo1"
//         alt=""
//         src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
//       ></img>
//      <div className="h1">New Post</div>

//       {errors.message && <p className="errors">{errors.message}</p>}
//       <form
//         onSubmit={handleFormSubmit}
//         encType="multipart/form-data"
//         className="login-form"
//       >


//         {errors && errors.title && <p className="errors">{errors.title}</p>}
//         <label className="login-label">
//           Title:
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </label>


//         {errors && errors.text && <p className="errors">{errors.text}</p>}
//         <label className="login-label">
//           Message:
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </label>





//           <div className="upload-container">
//             {errors && errors.photoUrl && (
//               <p className="errors">{errors.photoUrl}</p>
//             )}

//             <label htmlFor="photoUpload" className="upload-photo">
//               Upload photo:
//             </label>
//             <img className="showPhotoUpload" src={previewPhoto}></img>
//             <input
//               id="photoUpload"
//               type="file"
//               onChange={fileWrap}
//               accept=".png, .jpg, .jpeg, .gif"
//               required
//             />
//           </div>


//         {loading ? (
//           <div className="loading-text">creating....</div>
//         ) : (
//           <button className="login-button" type="submit">
//             Create Post
//           </button>
//         )}
//       </form>
//     </div>
//   );
// }






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
  const user = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [errors, setErrors] = useState([]);
  const [frontendErrors, setFrontendErrors] = useState({});
  const [dragging, setDragging] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("Drag and drop or");
  const [submitted, setSubmitted] = useState(false)



  useEffect(() => {
      const frontendErrors = {};

      if (!photo) {
          frontendErrors.photo = "Photo is required.";
      }
      if (!title) {
          frontendErrors.title = "Title is required.";
      }
      if (title.length > 60) {
          frontendErrors.name = "Title can not be longer than 60";
      }
      if (!text) {
          frontendErrors.text = "Message is required.";
      }
      if (text.length > 1000) {
          frontendErrors.text = "Message cannot be longer than 1000 characters";
      }


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
      setSubmitted(true)

  if (Object.keys(frontendErrors).length > 0) {
          return;
      }

          const formData = new FormData();

          formData.append("title", title);
          formData.append("text", text);
          formData.append("photo", photo);
          // formData.append("userId", user.id);

          if (!photo) {
              console.log("Photo required");
              return;
          }

      await dispatch(createSinglePostThunk(formData));
      await dispatch(getAllPostsThunk());
      await history.push("/posts");
      await closeModal();

  };

  const toggleInput = () => {
      setShowInput(!showInput);
  };

  return (
      <div className="new-post-main-container">
          <div className="h1">New Post</div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="new-post-form">
                  <div className="photo-container">
                      <div
                          id="drop-area"
                          onDrop={handleDrop}
                          onDragOver={handleDragOver}
                          className={dragging ? "dragging" : ""}
                      >
                          {photoPreview ? (
                              <img src={photoPreview} alt="Photo Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                          ) : (
                              uploadStatus
                          )}
                      </div>
                      <div className="choose-file">

                          {!photoPreview && (
                              <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleFileSelect}
                              />
                          )}
                      </div>
                      {frontendErrors.images && submitted && (
                          <p className='error-message'>{frontendErrors.images}</p>
                      )}
                  </div>
                  <div className="create-pin-form-details">
                      {frontendErrors.name && submitted && (
                              <p className='error-message'>{frontendErrors.title}</p>
                          )}
                      <div className="create-pin-form">
                          <div>
                              <input
                                  type="text"
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                  placeholder="Add your title"
                                  required
                              />
                          </div>

                          <div>
                              <textarea
                                  type="text"
                                  value={text}
                                  onChange={(e) => setText(e.target.value)}
                                  placeholder="Tell everyone what your Post is about"
                                  required
                              />
                          </div>
                          {frontendErrors.description && submitted && (
                              <p className='error-message'>{frontendErrors.description}</p>
                          )}

                          {frontendErrors.website && submitted && (
                              <p className='error-message'>{frontendErrors.website}</p>
                          )}
                      </div>
                      <div className="create-pin-save-button">
                          <button type="submit">CREATE NEW POST</button>
                      </div>
                  </div>
              </div>
          </form>
      </div>
  );
};
