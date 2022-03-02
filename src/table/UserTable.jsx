import React from "react";

const UserTable = (props) => {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Username</th>

					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.users.length > 0 ? (
					props.users.map((user) => {
						const { id, name, username } = user;
						return (
							<tr>
								<td key={id}>{id}</td>
								<td>{name}</td>
								<td>{username}</td>

								<td>
									<button
										className="delete button"
										onClick={() => {
											const confirmBox = window.confirm(
												"Do you really want to delete this Crumb?"
											);
											if (confirmBox === true) {
												props.deleteUser(id);
											}
										}}
									>
										del
									</button>

									{/* <button onClick={() => props.deleteUser(id)}>Delete</button> */}
									<button onClick={() => props.editUser(id, user)}>Edit</button>
								</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td colSpan={4}>No users found</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default UserTable;
