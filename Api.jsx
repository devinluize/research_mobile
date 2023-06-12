import axios from "axios";
import { BACKEND_URL } from "@env";
// import userAuth from "./store/userAuth";

// lu bikin login buat dapet bearer
// kode di bawah ini juga belom jalan karena belom di dalam scope method (harusnya si)
// lu bikin endpoint buat login dan isi datanya


//think of logic to store the bearer for authentication
//cara ngambil user
// const currentUser = userAuth((state) => state.user);
//currentUser.user

//cara ngeset user
// const setUser = userAuth((state) => state.setUser);
//setUser('1|pxCmam8ZJ0itty1Ag084kSIDBQ9MP9rqguxA4HC9')

//cara ngecek user
// const isAuth = userAuth((state) => state.isAuth);
//isAuth()

const BearerKey = "1|cIN5OlktIDUZ2Vw7XdtSJ0LMMl9ZJT4QgfOkWrMM";
const API = axios.create({
  baseURL: BACKEND_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${BearerKey}`,
  },
});

export default API;
