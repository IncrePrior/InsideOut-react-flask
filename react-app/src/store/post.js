export const GET_ALL_POSTS = "posts/GET_ALL_POSTS";
export const GET_SINGLE_POST = "posts/GET_SINGLE_POST";
export const CREATE_SINGLE_POST = "posts/CREATE_SINGLE_POST";
export const DELETE_SINGLE_POST = "posts/DELETE_SINGLE_POST";
export const UPDATE_SINGLE_POST = "posts/UPDATE_SINGLE_POST";

export const FETCH_PHOTO_URL_REQUEST = 'posts/FETCH_PHOTO_URL_REQUEST';
export const FETCH_PHOTO_URL_SUCCESS = 'posts/FETCH_PHOTO_URL_SUCCESS';
export const FETCH_PHOTO_URL_FAILURE = 'posts/FETCH_PHOTO_URL_FAILURE';

// Actions:

const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  posts,
});

const getSinglePost = (post) => ({
  type: GET_SINGLE_POST,
  post,
});

const createSinglePost = (post) => ({
  type: CREATE_SINGLE_POST,
  post,
});

export const updateSinglePost = (post) => {
  return {
    type: UPDATE_SINGLE_POST,
    post,
  };
};

const deleteSinglePost = (postId) => ({
  type: DELETE_SINGLE_POST,
  postId,
});

export const fetchPhotoUrlRequest = () => ({
  type: FETCH_PHOTO_URL_REQUEST,
});

export const fetchPhotoUrlSuccess = (photoUrl) => ({
  type: FETCH_PHOTO_URL_SUCCESS,
  photoUrl,
});

export const fetchPhotoUrlFailure = (error) => ({
  type: FETCH_PHOTO_URL_FAILURE,
  error,
});


//___________________________________________________

//thunks:


export const fetchPhotoUrl = (postId) => async (dispatch) => {
  dispatch(fetchPhotoUrlRequest());
  try {
    const response = await fetch(`/api/posts/${postId}/photo`);
    if (response.ok) {
      const data = await response.json();
      dispatch(fetchPhotoUrlSuccess(data.photoUrl));
    } else {
      throw new Error('Failed to fetch photo URL');
    }
  } catch (error) {
    dispatch(fetchPhotoUrlFailure(error.message));
  }
};

export const getAllPostsThunk = () => async (dispatch) => {
  const res = await fetch("/api/posts");
  console.log("Response:", res);

  if (res.ok) {
    const posts = await res.json();


    dispatch(getAllPosts(posts));
    return posts;
  } else {
    const data = await res.json();
    return data.errors;
  }
};


export const getSinglePostThunk = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}`);

  if (response.ok) {
    const post = await response.json();
    dispatch(getSinglePost(post));
    return post;
  } else {
    const errors = await response.json();
    return errors;
  }
};

export const createSinglePostThunk = (formData) => async (dispatch) => {
  const response = await fetch("/api/posts/new", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    const post = await response.json();
    dispatch(createSinglePost(post));
    return response;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const checkPreviousPost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/check/${postId}/previous`);
  const data = await response.json();

  if (response.ok) {
    return data.previousPostId;
  } else {
    throw data;
  }
};

export const checkNextPost = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/check/${postId}/next`);
  const data = await response.json();

  if (response.ok) {
    return data.nextPostId;
  } else {
    throw data;
  }
};

export const deleteSinglePostThunk = (postId) => async (dispatch) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    // const post = await response.json()
    dispatch(deleteSinglePost(postId));
    return response;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const editSinglePostThunk = (postId, formData) => async (dispatch) => {

  console.log('Dispatching editSinglePostThunk');

  const response = await fetch(`/api/posts/${postId}/edit`, {
    method: "PUT",
    body: formData,
  });

  if (response.ok) {
    const realNewPost = await response.json();
    const returnPost = { ...realNewPost };

    console.log('editSinglePostThunk success:', returnPost);


    await dispatch(updateSinglePost(realNewPost));
    return returnPost;
  } else {
    const data = await response.json();

    console.log('editSinglePostThunk error:', data);


    return data;
  }
};


// export const editSinglePostThunk = (postId, formData) => async (dispatch) => {
//   const response = await fetch(`/api/posts/${postId}/edit`, {
//     method: "PUT",
//     body: formData,
//   });

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(createSinglePost(formData));
//     return response;
//   } else if (response.status < 500) {
//     const data = await response.json();
//     if (data.errors) {
//       return data.errors;
//     }
//   } else {
//     return ["An error occurred. Please try again."];
//   }
// };

// export const editSinglePostThunk = (FormData, postId) => async(dispatch) => {
//   const response = await fetch(`/api/posts/${postId}`, {
//     method: 'PUT',
//     body: FormData
//   });

//   if(response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     const errors = await response.json();
//     return errors;
//   }
// };

//___________________________________________________

const initialState = { allPosts: {}, singlePost: {} };

//___________________________________________________



export default function postsReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.posts,
      };

    case GET_SINGLE_POST:
      newState = { ...state, singlePost: action.post };
      return newState;

    case CREATE_SINGLE_POST:
      return {
        ...state,
        allPosts: {
          ...state.allPosts,
          [action.post.id]: action.post, // Assuming your post object has an 'id' field
        },
        singlePost: action.post,
      };

    case UPDATE_SINGLE_POST:

    console.log('UPDATE_SINGLE_POST action processed:', action.post);

      return { ...state, [action.post.id]: action.post };


    case DELETE_SINGLE_POST:
      newState = { ...state, allPosts: { ...state.allPosts } };
      delete newState.allPosts[action.postId];
      return newState;


    case FETCH_PHOTO_URL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PHOTO_URL_SUCCESS:
      return {
        ...state,
        photoUrl: action.photoUrl,
        loading: false,
      };

    case FETCH_PHOTO_URL_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
