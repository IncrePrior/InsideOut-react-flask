import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { useEffect, useState } from 'react';
import { useModal } from "../../context/Modal";
import { SingleCollectionThunk , RemovePostFromCollectionThunk } from "../../store/collection"
import "./RemovePostFromCollection.css";

export default function RemovePostFromCollection({ postId, setRefresh }) {

    console.log("postId", postId)

    const dispatch = useDispatch()
    const history = useHistory()
    const { closeModal } = useModal()
    const collection = useSelector(state => state.collections.singleCollection)



    useEffect(() => {
        dispatch(SingleCollectionThunk(collection.id))
    }, [dispatch, collection.id])



    const removePost = async (e) => {
        e.preventDefault()
        await dispatch(RemovePostFromCollectionThunk(collection.id, postId))
        setRefresh(collection.id)

        await history.push(`/collections/${collection.id}`)
        await closeModal()
    };



    const cancelRemoval = () => {
        closeModal()
    }

    return (
        <div className="delete-container1">
            <div className="h1">Are you sure?</div>
                <button className="confirm-button1" onClick={removePost}>Remove</button>
                <button className="cancel-button1" onClick={cancelRemoval}>Cancel</button>
        </div>
    )
}
