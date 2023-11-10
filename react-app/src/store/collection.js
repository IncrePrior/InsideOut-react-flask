export const GET_ALL_COLLECTIONS = "collections/GET_ALL_COLLECTIONS";
export const GET_SINGLE_COLLECTION = "collections/GET_SINGLE_COLLECTION";
export const CREATE_SINGLE_COLLECTION = "collections/CREATE_SINGLE_COLLECTION";
export const DELETE_SINGLE_COLLECTION = "collections/DELETE_SINGLE_COLLECTION";
// export const DELETE_POST_FROM_COLLECTION = "collections/DELETE_POST_FROM_COLLECTION";

// Actions:

const getAllCollections = (collections) => ({
  type: GET_ALL_COLLECTIONS,
  collections,
});

const getSingleCollection = (collection) => ({
  type: GET_SINGLE_COLLECTION,
  collection,
});

const createSingleCollection = (collection) => ({
  type: CREATE_SINGLE_COLLECTION,
  collection,
});

const deleteSingleCollection = (collectionId) => ({
  type: DELETE_SINGLE_COLLECTION,
  collectionId,
});

// const deletePostFromCollection = (postId) => ({
//   type: DELETE_POST_FROM_COLLECTION,
//   postId
// })

//___________________________________________________

//thunks:

export const AllCollectionsThunk = () => async (dispatch) => {
  const res = await fetch("/api/collections");

  if (res.ok) {
    const collections = await res.json();
    dispatch(getAllCollections(collections));
    return res;
  } else {
    const data = await res.json();
    return data.errors;
  }
};

export const SingleCollectionThunk = (collectionId) => async (dispatch) => {
  const res = await fetch(`/api/collections/${collectionId}`);

  if (res.status === 404) {
    const error = await res.json();
    console.error("Collection not found:", error);
    return error;
  }

  if (res.ok) {
    const collection = await res.json();
    dispatch(getSingleCollection(collection));
    return collection;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const CreateCollectionThunk = (formData) => async (dispatch) => {
  const res = await fetch("/api/collections/new", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const collection = await res.json();
    dispatch(createSingleCollection(collection));
    return collection;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const EditCollectionThunk =
  (collectionId, formData) => async (dispatch) => {
    const res = await fetch(`/api/collections/edit/${collectionId}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(createSingleCollection(formData));
      return res;
    } else if (res.status < 500) {
      const data = await res.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

export const DeleteCollectionThunk = (collectionId) => async (dispatch) => {
  const res = await fetch(`/api/collections/${collectionId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const message = await res.json();
    dispatch(deleteSingleCollection(collectionId));
    return message;
  } else {
    const errors = res.json();
    return errors;
  }
};

export const AddPostToCollectionThunk = (formData) => async (dispatch) => {
  console.log("AddPostToCollectionThunk is being dispatched");

  try {
  const res = await fetch("/api/collections/addPost", {
    method: "PUT",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    console.log("data from AddPostToCollectionThunk:", data);

    return res;
  } else if (res.status < 500) {
    const data = await res.json();

    console.log("response from AddPostToCollectionThunk:", data);

    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }

} catch (error) {
  console.error("An error occurred:", error.message);
  return ["An error occurred. Please try again."];
}
};


export const RemovePostFromCollectionThunk =
  (collectionId, postId) => async (dispatch) => {
    const res = await fetch(
      `/api/collections/${collectionId}/removePost/${postId}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      const collection = await res.json();
      dispatch(getSingleCollection(collection));
    } else if (res.status < 500) {
      const data = await res.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

//___________________________________________________

const initialState = {
  allCollections: {},
  singleCollection: {},
  collection: {},
  loading: false,
};

//___________________________________________________

export default function collectionsReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_ALL_COLLECTIONS:
      newState = { ...state, allCollections: {}, singleCollection: {} };
      action.collections.forEach((collection) => {
        newState.allCollections[collection.id] = collection;
      });
      return newState;


    case GET_SINGLE_COLLECTION:
      const newSingleState = { ...state, singleCollection: { ...action.collection } };

      // console.log("State after GET_SINGLE_COLLECTION:", newState);

      return newSingleState;


    case CREATE_SINGLE_COLLECTION:
      newState = {
        ...state,
        allCollections: { ...state.allCollections },
        singleCollection: { ...action.collection },
      };
      return newState;

    case DELETE_SINGLE_COLLECTION:
      newState = {
        ...state,
        allCollections: { ...state.allCollections },
        singleCollection: { ...action.collection },
      };
      delete newState.allCollections[action.collectionId];
      return newState;

    default:
      return state;
  }
}
