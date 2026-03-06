import { createContext } from "react";

const UserInfoContext = createContext({
  username:"Guess",
  isAdmin: "false",
});

export default UserInfoContext;