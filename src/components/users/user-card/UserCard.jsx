export function UserCard({ user }) {
    return (
        <div className="user-card">
            <div className="card-header">
                <h4>Atanas Gyulchev</h4>
            </div>
            <div className="card-body">
                <img src="ahaha.png" alt="user-image" />
            </div>
            <div className="card-footer">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
        </div>
    )
}
