import React, { useState } from "react";
import { useModal } from '../../context/Modal'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { DeleteCollectionThunk } from '../../store/collection';
import './DeleteCollection.css'

export default function DeleteCollectionModal({ collectionId, collection }) {

    const { closeModal } = useModal()
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState({});


    const deleteCollection = async (e) => {
        e.preventDefault()
        const deleted = await dispatch(DeleteCollectionThunk(collectionId))
    if(deleted) {
        await history.push('/posts')
    }
    closeModal();
    };

    const cancelDelete = () => {
        closeModal()
    }

    return (
        <div className='delete-container'>
            <div className="h1">Are you sure?</div>
            {errors.error && (
                <p className="errors errors-ul">
                {errors.error}
                </p>
            )}
            {/* <div className='create-edit-board-buttons'> */}
                <button className="confirm-button" onClick={deleteCollection}>DELETE</button>
                <button className="cancel-button" onClick={cancelDelete}>CANCEL</button>
            {/* </div> */}
        </div>
    )
}
