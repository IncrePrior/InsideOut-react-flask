export const GET_ALL_POSTS = "posts/GET_ALL_POSTS";
export const GET_SINGLE_POST = "posts/GET_SINGLE_POST";
export const CREATE_SINGLE_POST = "posts/CREATE_SINGLE_POST";
export const DELETE_SINGLE_POST = "posts/DELETE_SINGLE_POST";

//actions:

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

const deleteSinglePost = (postId) => ({
  type: DELETE_SINGLE_POST,
  postId,
});

//___________________________________________________

//thunks:

export const getAllPostsThunk = () => async (dispatch) => {
  const res = await fetch("/api/posts");
  console.log("Response:", res);

  if (res.ok) {
    const posts = await res.json();

    // console.log('Fetched posts:', posts);

    dispatch(getAllPosts(posts));
    return posts;
  } else {
    const data = await res.json();
    return data.errors;
  }
};

// export const getAllPostsThunk = () => async (dispatch) => {
//     try {
//         const res = await fetch('/api/posts');

//         if (res.ok) {
//             const data = await res.json();
//             const posts = data.posts.map(post => {
//                 // Ensure that each post includes the 'photo' property
//                 if (post.photo) {
//                     return post;
//                 } else {
//                     // If 'photo' is missing, you might want to provide a default value
//                     return { ...post, photo: { photo_url: 'default_photo_url' } };
//                 }
//             });

//             dispatch(getAllPosts(posts));
//             return posts;
//         } else {
//             const errorData = await res.json();
//             return errorData.errors;
//         }
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         return { error: 'An error occurred while fetching posts' };
//     }
// };

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
  const response = await fetch("/api/posts/new-post", {
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
  const response = await fetch(`/api/posts/edit/${postId}`, {
    method: "PUT",
    body: formData,
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(createSinglePost(formData));
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

//___________________________________________________

const initialState = { allPosts: {}, singlePost: {} };

//___________________________________________________

//reducer:

export default function postsReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_ALL_POSTS:
      // newState = { ...state, allPosts: {}, singlePost: {} };
      // // action.posts.forEach((post) => {
      // // newState.allPosts[post.id] = post;
      // // });
      // return newState;
      return {
        ...state,
        allPosts: action.posts,
      };

    case GET_SINGLE_POST:
      newState = { ...state, singlePost: action.post };
      return newState;

    case CREATE_SINGLE_POST:
      newState = {
        ...state,
        allPosts: { ...state.allPosts },
        singlePost: action.post,
      };
      return newState;

    case DELETE_SINGLE_POST:
      newState = { ...state, allPosts: { ...state.allPosts } };
      delete newState.allPosts[action.postId];
      return newState;

    default:
      return state;
  }
}
