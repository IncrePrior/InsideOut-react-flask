import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { AddPostToCollectionThunk, AllCollectionsThunk } from "../../store/collection";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import NewCollection from "../NewCollection/NewCollection";
import './AddPostToCollection.css';

export default function AddPostToCollection({ post_id }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();
    const user = useSelector(state => state.session.user);
    const [frontendErrors, setFrontendErrors] = useState({});
    const [collection_id, setCollectionId] = useState('')

    const collectionsObj = useSelector(state => state.collections.allCollections);
    const collections = Object.values(collectionsObj);
    const user_collections = collections.filter(collections => collections.user_id === user.id);

    const [selectedCollection, setSelectedCollection] = useState(null);



    useEffect(() => {
        dispatch(AllCollectionsThunk());
    }, [dispatch]);


    const selectCollection = async (collection) => {
        setSelectedCollection(collection);

        const formData = new FormData();
        formData.append("post_id", post_id);
        console.log("PostId", formData.get("post_id"))

        formData.append("collection_id", collection.id);

        console.log("Collection.id", formData.get("collection_id"))

        try {
            console.log("Before dispatching AddPostToCollectionThunk");

            const addPost = await dispatch(AddPostToCollectionThunk(formData));
            console.log("After dispatching AddPostToCollectionThunk");

            if (addPost && addPost.errors) {
                console.error("Error adding post to collection:", addPost.errors);
            } else {
                console.log("Post added to collection");
            }
        } catch (error) {
            console.error("An error occurred:", error.message);
        }

        await history.push(`/collections/${collection.id}`);
        await closeModal();
    };

    return (
        <div className="add-post-container">
            <div className="board-selection-container">
                    <div className="display-container">
                        {user_collections.map((collection) => (
                            <div
                                id="collection-list-for-adding-post"
                                className={`collection-names ${selectedCollection === collection ? "active" : ""}`}
                                onClick={() => selectCollection(collection)}
                                key={collection.id}
                            >
                                <span>{collection.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {frontendErrors.collection_id && (
                    <p className='error-message'>{frontendErrors.collection_id}</p>
                )}
        </div>
    );
}



// useEffect(() => {
    //     const frontendErrors = {};
    //     if (!selectedCollection) {
    //         frontendErrors.collection_id = "Please select collection.";
    //     }
    //     setFrontendErrors(frontendErrors);
    // }, [selectedCollection]);
