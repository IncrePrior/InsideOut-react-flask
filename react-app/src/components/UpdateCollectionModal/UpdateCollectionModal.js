import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { useLocation } from "react-router-dom";
import { EditCollectionThunk, SingleCollectionThunk } from "../../store/collection";
import "./UpdateCollectionModal.css";

export default function UpdateCollectionModal() {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const user = useSelector((state) => state.session.user);
    const collection = useSelector(state => state.collections.singleCollection)

    const [name, setName] = useState(collection.name);
    const [description, setDescription] = useState(collection.description);
    const [type, setType] = useState(collection.type);

    const [frontendErrors, setFrontendErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState([])


useEffect(() => {
    const frontendErrors = {};
    if (!name) frontendErrors.name = "A name is required to create your collection";
    if (name.length > 60) frontendErrors.name = "A name cannot be longer than 60 characters";
    if (!description) frontendErrors.description = "A description is required to create your collection";
    if (description.length > 1000) frontendErrors.description = "A description cannot be longer than 1000 characters";
    if (!type) frontendErrors.type = "Define the type of your collection.";
    if (type.length > 20) frontendErrors.type = "Type cannot be longer than 20 characters";
    setFrontendErrors(frontendErrors);
}, [name, description, type]);



const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(frontendErrors).length > 0) {
        return;
    }
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("type", type);


    try {
        const updatedCollection = await dispatch(EditCollectionThunk(collection.id, formData));
        if (updatedCollection && updatedCollection.errors) {
            setErrors(updatedCollection.errors);
        }
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
    await dispatch(SingleCollectionThunk(collection.id))
    await closeModal();
};

const cancelEdit = () => {
    closeModal()
};

return (
    <div className="update-collection-main-container">

        <div className="top-of-update-container">
        <img
        className="INSIDEOUT-logo3"
        alt=""
        src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
        ></img>

            <div className="new-h1">Update Collection</div>
            </div>


                <div className="inputs-new-collection-container">
                <form onSubmit={handleSubmit}  className="login-form5">
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className="new-post-form1">
                {frontendErrors.name && submitted && (
                <p className="errors">{frontendErrors.name}</p>
            )}
            <label className="single-input">
                Name
            <input
                id="input-text"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </label>

            {frontendErrors.description && submitted && (
                <p className="error-message">{frontendErrors.description}</p>
            )}
            <div>
            <textarea className="single-input"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                // placeholder="What is this collection about?"
                required
            />
            </div>
            {frontendErrors.type && submitted && (
                <p className="error-message">{frontendErrors.type}</p>
            )}

            <label className="single-input">
                Type
            <input
                id="input-text"
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                // placeholder="(Inside, Out, Mixed)"
                required
            />
            </label>
            <button className="submit-button5" type="submit">UPDATE</button>
            <button className="submit-button6" type="submit" onClick={cancelEdit}>CANCEL</button>
            </div>
        </form>
    </div>
    </div>
);
}
