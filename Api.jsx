import axios from "axios";
import { BACKEND_URL } from "@env";

// import userAuth from "./store/userAuth";
//think of logic to store the bearer for authentication
//cara ngambil user
// const currentUser = userAuth((state) => state.user);
//currentUser.user

//cara ngeset user
// const setUser = userAuth((state) => state.setUser);
//setUser('bearer')

//cara ngecek user
// const isAuth = userAuth((state) => state.isAuth);
//isAuth()

const BearerKey = "1|Z3bkzag2SjohncPHUt3gQLpjTbBeA2kGJr49pmq4";

const API = axios.create({
  baseURL: BACKEND_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${BearerKey}`,
  },
});

const Post = async (url, data) => {
  try {
    return await API.post(BACKEND_URL + url, data);
  } catch (err) {
    console.log(err);
  }
};

const Get = async (url) => {
  try {
    return await API.get(BACKEND_URL + url);
  } catch {
    console.log(err);
  }
};
export { Post, Get };
