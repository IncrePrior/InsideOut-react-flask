import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editSinglePostThunk, getSinglePostThunk } from "../../store/post";
import { useModal } from "../../context/Modal";
import "./EditPost.css";

export default function EditPost() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();
    const user = useSelector((state) => state.session.user);
    const post = useSelector((state) => state.posts.singlePost);
    const postId = useSelector((state) => state.posts.singlePost?.id);

    // console.log('EditPost component rendering');

    const [title, setTitle] = useState(post.title || "");
    const [text, setText] = useState(post.text || "");
    const [errors, setErrors] = useState([]);
    const [frontendErrors, setFrontendErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        const frontendErrors = {};
        if (!title) frontendErrors.title = "Title is required.";
        if (title.length > 60) frontendErrors.title = "Title can not be longer than 60";
        if (!text) frontendErrors.text = "Message is required.";
        if (text.length > 1000) frontendErrors.text = "Message cannot be longer than 1000 characters";
        setFrontendErrors(frontendErrors);
    }, [title, text]);


    const handleSubmit = async (e) => {
    console.log('Submit button clicked');

    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(frontendErrors).length > 0)  return;



    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);


    try {
        const editPost = await dispatch(editSinglePostThunk(post.id, formData));
        if (editPost && editPost.errors) {
            setErrors(editPost.errors);
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
    await dispatch(getSinglePostThunk(post.id))
    await closeModal();
        }


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
                        {/* <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul> */}
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
                <button type="button" className="submit-button1" onClick={cancelEdit}>
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



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { editSinglePostThunk, getSinglePostThunk } from "../../store/post";
// import { useModal } from "../../context/Modal";
// import "./EditPost.css";

// export default function EditPost() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const { closeModal } = useModal();
//     const user = useSelector((state) => state.session.user);
//     const post = useSelector((state) => state.posts.singlePost);
//     const postId = useSelector((state) => state.posts.singlePost?.id);

//     const [title, setTitle] = useState(post.title || "");
//     const [text, setText] = useState(post.text || "");
//     const [errors, setErrors] = useState([]);
//     const [frontendErrors, setFrontendErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false);

//     useEffect(() => {
//       // ... (unchanged)
//     }, [title, text]);

//     const checkOwnership = async () => {
//       console.log('Before checking ownership:', user, post);

//       if (user.id !== post?.user_id) {
//         console.log('Ownership check failed. Permission denied.');
//         return Promise.reject(new Error("Permission denied: Only the owner can edit this post."));
//       }
//       console.log('Ownership check passed.');
//       return Promise.resolve();
//     };

//     const handleSubmit = async (e) => {
//       console.log('Submit button clicked');

//       e.preventDefault();
//       setSubmitted(true);

//       if (Object.keys(frontendErrors).length > 0) return;

//       try {
//         console.log('Before checkOwnership');
//         await checkOwnership();
//         console.log('After checkOwnership');

//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("text", text);

//         console.log('Before dispatching editSinglePostThunk');
//         const editPost = await dispatch(editSinglePostThunk(post.id, formData));
//         console.log('After dispatching editSinglePostThunk');

//         if (editPost && editPost.errors) {
//           setErrors(editPost.errors);
//         }

//         await dispatch(getSinglePostThunk(post.id));
//         await closeModal();
//       } catch (error) {
//         console.error("An error occurred:", error.message);

//         if (error.message.includes("Permission denied")) {
//           alert("Permission denied: Only the owner can edit this post.");
//         } else {
//           // Handle other errors
//           // ...
//         }
//       }
//     };

//     const cancelEdit = () => {
//       closeModal();
//     };


//   return (
//     <div className="new-post-main-container1">
//       <img
//         className="INSIDEOUT-logo2"
//         alt=""
//         src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
//       ></img>
//       <div className="new-h1">Edit Post</div>
//       <div className="content-container">
//         <div className="photo-container1">
//           <img className="photo-in-container1" src={post.photoUrl} alt={post.title} />
//         </div>
//         <div className="all-text-container">
//           <form onSubmit={handleSubmit} className="login-form1">
//             <div className="new-post-details">
//               {frontendErrors.title && submitted && (
//                 <p className="errors">{frontendErrors.title}</p>
//               )}
//               <div className="new-post-form1">
//                 <label className="login-label">
//                   Title
//                   <input
//                     type="text"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                   />
//                 </label>
//                 {frontendErrors.text && submitted && (
//                   <p className="errors">{frontendErrors.text}</p>
//                 )}
//                 <label className="login-label">
//                   <textarea
//                     type="text"
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                     placeholder="Write your message about this post."
//                     required
//                   />
//                 </label>
//               </div>
//               <div className="login-button">
//                 <button type="submit" className="submit-button" onClick={handleSubmit}>
//                   EDIT POST
//                 </button>
//                 <button type="button" className="submit-button1" onClick={cancelEdit}>
//                   CANCEL
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
