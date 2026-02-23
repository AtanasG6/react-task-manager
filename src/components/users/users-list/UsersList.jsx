import { getAllUsers } from "../../../utils/http-utils/user-requests";
import { UserCard } from "../user-card/UserCard";
import { useState, useEffect } from "react";
import './users_list.scss';

export function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers()
            .then(response => {
                setUsers(response.data);
            })
    }, [])

    return (
        <div className="users-list-wrapper">
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}
