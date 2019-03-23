import React from "react";
import Home from  "./components/Home";
import UserLists, { loadUsers} from "./components/userList"

const Routes =  [
    {
        key:"1",
        path: "/",
        component: Home,
        exact: true
    },
    {
        key:2,
        path: "/users",
        component: UserLists,
        loadData: loadUsers,
    }
]
export default Routes;