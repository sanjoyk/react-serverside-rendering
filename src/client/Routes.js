import HomePage from  "./pages/HomePage";
import UserListsPage from "./pages/usersListPage"

const Routes =  [
    {
        ...HomePage,
        key:"1",
        path: "/",
        exact: true
    },
    {
        ...UserListsPage,
        key:2,
        path: "/users",
    }
]
export default Routes;