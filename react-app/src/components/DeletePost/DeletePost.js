import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import { deleteSinglePostThunk } from "../../store/post";
import "./DeletePost.css";



export default function DeletePost({ postId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();
  const id = postId;
  const [errors, setErrors] = useState({});

  const handleDelete = async (e) => {
    e.preventDefault();
    const data = await dispatch(deleteSinglePostThunk(id));
    if (data.errors) {
      setErrors(data.errors);
    }
    closeModal();
    history.push(`/posts`);
  };

  return (
    <div className="delete-container">
      <div className="h1">Are you sure?</div>
      {errors.error && (
        <p className="errors errors-ul">
          {errors.error}
        </p>
      )}
      <button className="confirm-button" onClick={handleDelete}>
        CONFIRM
      </button>
      <button className="cancel-button" onClick={closeModal}>
        CANCEL
      </button>
    </div>
  );
}



