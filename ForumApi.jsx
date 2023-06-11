import API from "./Api";
const ENDPOINTS = {
  FORUM: () => "api/forum",
  FORUM_ID: (id) => `api/forum/${id}`,
  FORUM_THREAD_ADD: () => "api/forum/add",
  FORUM_THREAD_COMMENT: (id) => `api/forum/${id}/comment`,
  FORUM_THREAD_LIKE: (id) => `api/forum/${id}/like`,
  FORUM_THREAD_UNLIKE: (id) => `api/forum/${id}/unlike`,
  LOGIN: () => "login",
  REGISTER: () => "register",
};

// const getAllForum = () => {
//   const result = Get(ENDPOINTS.FORUM());
//   return result;
// };
// const getForumByID = (id) => {
//   const result = Get(ENDPOINTS.FORUM_ID(id));
//   return result;
// };

// const addThreadToForum = (id, payload) => {
//   const result = Post(ENDPOINTS.FORUM_THREAD_ADD(id), payload);
//   return result;
// };

// const addCommentToThread = (id, payload) => {
//   const result = Post(ENDPOINTS.FORUM_THREAD_COMMENT(id), payload);
//   return result;
// };

// const likeThread = (id, payload) => {
//   const result = Post(ENDPOINTS.FORUM_THREAD_LIKE(id), payload);
//   return result;
// };

// const unlikeThread = (id, payload) => {
//   const result = Post(ENDPOINTS.FORUM_THREAD_UNLIKE(id), payload);
//   return result;
// };

const login = async (payload) => {
  // console.log("asdasdsa");
  const result = await API.get(
    `${ENDPOINTS.LOGIN}?${new URLSearchParams(payload)}`
  );
  return result;
};

const register = async (payload) => {
  const result = await API.get(
    `${ENDPOINTS.REGISTER}?${new URLSearchParams(payload)}`
  );
  return result;
};

export {
  // getAllForum,
  // getForumByID,
  // addThreadToForum,
  // addCommentToThread,
  // likeThread,
  // unlikeThread,
  login,
  register,
};
