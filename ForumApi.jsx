// import { Post,Get } from './Api';
import API from './Api';
const ENDPOINTS = {
  FORUM: () => 'api/posts',
  FORUM_ID: (id) => `api/posts/${id}`,
  FORUM_THREAD_ADD: () => 'api/forum/add',
  FORUM_THREAD_COMMENT: (id) => `api/forum/${id}/comment`,
  FORUM_THREAD_LIKE: (id) => `api/forum/${id}/like`,
  FORUM_THREAD_UNLIKE: (id) => `api/forum/${id}/unlike`,
  LOGIN: () => 'api/login',
  REGISTER: () => 'api/register2',
  GETDATA:()=>'api/me'
}

const getAllForum = async() =>{
  try {
    const result = await API.get(ENDPOINTS.FORUM());
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
}
const getmydata = async()=>{
  // console.log("tes");
  try{
  const result = await API.get(ENDPOINTS.GETDATA());
  return result.data;
} catch (err) {
  console.log(err);
}
}

const getForumByID = async(id) =>{
  try {
    const result = await API.get(ENDPOINTS.FORUM_ID(id));
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
}

const addThreadToForum = async(id,payload) => {
  try {
    const result = await API.post(ENDPOINTS.FORUM_THREAD_ADD(id),payload);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}

const addCommentToThread = async(id,payload) => {
  try {
    const result = await API.post(ENDPOINTS.FORUM_THREAD_COMMENT(id),payload);
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
}

const likeThread = async(id,payload) => {
  try {
    const result = await API.post(ENDPOINTS.FORUM_THREAD_LIKE(id),payload);
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
}

const unlikeThread = async(id,payload) => {
  try {
    const result = await API.post(ENDPOINTS.FORUM_THREAD_UNLIKE(id),payload);
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
}

const login = async(payload) =>{
  try {
    const result = await API.get(`${ENDPOINTS.LOGIN()}?${new URLSearchParams(payload)}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}

const register = async(payload) => {
  console.log("data_receive")
  try {
    const result = await API.get(`${ENDPOINTS.REGISTER()}?${new URLSearchParams(payload)}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
}


export {
  getAllForum,
  getForumByID,
  addThreadToForum,
  addCommentToThread,
  likeThread,
  unlikeThread,
  login,
  register,
  getmydata
};
