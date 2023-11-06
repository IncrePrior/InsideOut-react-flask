export const GET_ALL_COLLECTIONS = "collections/GET_ALL_COLLECTIONS";
export const GET_SINGLE_COLLECTION = "collections/GET_SINGLE_COLLECTION";
export const CREATE_SINGLE_COLLECTION = "collections/CREATE_SINGLE_COLLECTION";
export const DELETE_SINGLE_COLLECTION = "collections/DELETE_SINGLE_COLLECTION";


// Actions:

const getAllCollections = (collections) => ({
  type: GET_ALL_COLLECTIONS,
  collections,
});

const getSingleCollection = (collectionId) => ({
  type: GET_SINGLE_COLLECTION,
  collectionId,
});

const createSingleCollection = (collection) => ({
  type: CREATE_SINGLE_COLLECTION,
  collection,
});


const deleteSingleCollection = (collectionId) => ({
  type: DELETE_SINGLE_COLLECTION,
  collectionId,
});

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

  if (res.ok) {
    const collection = await res.json();
    dispatch(getSingleCollection(collection));
    return res;
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



export const EditCollectionThunk = (collectionId, formData) => async (dispatch) => {
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
      const collection = await res.json()
      dispatch(deleteSingleCollection(collectionId));
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



export const AddPostToCollectionThunk = (formData) => async (dispatch) => {
    const res = await fetch('/api/collections/addPost', {
        method: 'PUT',
        body: formData
    });

    if(res.ok) {
        const data = await res.json()
        return res
    } else if (res.status < 500) {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}



export const RemovePostFromCollectionThunk = (collectionId, postId) => async (dispatch) => {
    const res = await fetch(`/api/collections/${collectionId}/removePost/${postId}`, {
        method: 'DELETE'
    })
    if(res.ok) {
        const collection = await res.json()
        dispatch(getSingleCollection(collection))
    } else if (res.status < 500) {
		const data = await res.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
}



//___________________________________________________

const initialState = { allCollections: {}, singleCollection: {} };

//___________________________________________________

export default function collectionsReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_ALL_COLLECTIONS:
            newState = { ...state, allCollections: {}, singleCollection: {} };
            action.collections.forEach((collection) => {
                newState.allCollections[collection.id] = collection;
            });
        return newState

        case GET_SINGLE_COLLECTION:
            newState = { ...state, allCollections: {}, singleCollection: {} };
            newState.singleCollection = action.collectionId
        return newState

        case CREATE_SINGLE_COLLECTION:
            newState = { ...state, allCollections: { ...state.allCollections}, singleCollection: { ...action.collection} }
        return newState

        case DELETE_SINGLE_COLLECTION:
            newState = { ...state, allCollections: { ...state.allCollections}, singleCollection: {}}
            delete newState.allCollections[action.collectionId]
        return newState

        default:
            return state;
  }
}
