import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

import * as api from "../api";

//Action creators with Redux thunk and async functions

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data }); //no return because of redux thunk
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error); //always console.log error, not error.message: gives more infos
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id); // no const { data } = response.data, because we aren't interested in the data when we delete
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error); //always console.log error, not error.message: gives more infos
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id); // no const { data } = response.data, because we aren't interested in the data when we delete
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error); //always console.log error, not error.message: gives more infos
  }
};
