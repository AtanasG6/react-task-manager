import { UsersList } from "../users/users-list/UsersList";
import { User } from "../users/user/User";
import { Route, Routes } from "react-router-dom";

export function Main() {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/users-list" element={<UsersList />} />
                <Route path="/user/:id" element={<User />} />
            </Routes>
        </div>
    )
}
