import {
  CREATE_POST,
  FETCH_POSTS,
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
} from "./types";

export function createPosts(post) {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export function fetchPosts() {
  return async dispatch => {
    try {
      dispatch(showLoader());
      const resopnse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const json = await resopnse.json();
      dispatch({
        type: FETCH_POSTS,
        payload: json,
      });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showAlert('Что-то пошло не так!'));
      dispatch(hideLoader());
      setTimeout(() => {
        dispatch(hideAlert());
      }, 4000)
    }
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  }
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text,
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  }
}
