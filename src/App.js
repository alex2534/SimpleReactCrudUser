import { useState } from "react";
import "./App.css";
import userList from "./Data";
import UserTable from "./table/UserTable";
import AddUserForm from "./form/AppUserForm";
import EditUserForm from "./form/EditUserForm";

function App() {
	const initialUser = { id: null, name: "", username: "", age: "" };
	const [users, setUsers] = useState(userList);
	const [currentUser, setCurrentUser] = useState(initialUser);
	const [editing, setEditing] = useState(false);

	const addUser = (user) => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};

	const editUser = (id, user) => {
		setEditing(true);
		setCurrentUser(user);
	};

	const updateUser = (newUser) => {
		setUsers(
			users.map((user) => (user.id === currentUser.id ? newUser : user))
		);
	};

	const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));
	return (
		<div className="container">
			<h1>React CRUD App with Hooks</h1>
			<div className="row">
				<div className="five columns">
					{editing ? (
						<div>
							<h2>Edit user</h2>
							<EditUserForm
								currentUser={currentUser}
								setEditing={setEditing}
								updateUser={updateUser}
							/>
						</div>
					) : (
						<div>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</div>
					)}
				</div>
				<div className="seven columns">
					<h2>View users</h2>
					<UserTable
						users={users}
						deleteUser={deleteUser}
						editUser={editUser}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
