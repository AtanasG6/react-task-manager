import { getAllUsers, deleteUser } from "../../../utils/http-utils/user-requests";
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

    const deleteUserHandler = async (id) => {
        await deleteUser(id);
        setUsers(prevState => prevState.filter(user => user.id !== id));
    }

    return (
        <div className="users-list-wrapper">
            {users.map(user => (
                <UserCard key={user.id} user={user} deleteUser={deleteUserHandler} />
            ))}
        </div>
    )
}
