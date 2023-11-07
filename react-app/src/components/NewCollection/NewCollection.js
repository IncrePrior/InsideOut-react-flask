import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { useLocation } from "react-router-dom";
import { AllCollectionsThunk, CreateCollectionThunk } from "../../store/collection";
import "./NewCollection.css";

export default function NewCollection() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { closeModal } = useModal();
    const user = useSelector((state) => state.session.user);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    const [frontendErrors, setFrontendErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

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



    const data = await dispatch(CreateCollectionThunk(formData));
    if (currentPath.startsWith("/posts/")) await closeModal();
    else {
        await dispatch(AllCollectionsThunk());
        await closeModal();
        await history.push(`/collections/${data.id}`);
    }
};

return (
    <div className="new-collection-main-container">
        <img
        className="INSIDEOUT-logo2"
        alt=""
        src="https://image.jimcdn.com/app/cms/image/transf/none/path/sd0536822daf447dd/image/ic9d478a0b2938cfd/version/1699021732/image.png"
        ></img>

            <div className="new-h1">Create New Collection</div>
                <div className="inputs-new-collection-container">
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="login-form2">
                <div className="new-post-form1">
                {frontendErrors.name && submitted && (
                <p className="errors">{frontendErrors.name}</p>
            )}
            <label className="single-input">
                Name
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </label>

            {frontendErrors.description && submitted && (
                <p className="error-message">{frontendErrors.description}</p>
            )}

            <textarea className="single-input"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is this collection about?"
                required
            />

            {frontendErrors.type && submitted && (
                <p className="error-message">{frontendErrors.type}</p>
            )}

            <label className="single-input">
                Type
            <input
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="(Inside, Out, Mixed)"
                required
            />
            </label>
            <button className="submit-button2" type="submit">CREATE</button>
            </div>
        </form>
    </div>
    </div>
);
}
