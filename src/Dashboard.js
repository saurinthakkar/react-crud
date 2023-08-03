import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import * as faker from 'faker';
import * as faker from "@faker-js/faker";

function randomProfile() {
	return {
		userId: faker.faker.datatype.uuid(),
		firstname: faker.faker.person.firstName(),
		lastname: faker.faker.person.lastName(),
		email: faker.faker.internet.email(),
		// createdOn: faker.faker.date.past(),
		status: faker.faker.person.prefix(),
	};
}

export const Dashboard = () => {
	const [authenticated, setAuthenticated] = useState(null);
	const navigate = useNavigate();

	const profile = function (max_size) {
		const users = [];
		for (let index = 0; index < max_size; index++) {
			users.push(randomProfile());
		}
		return users;
	};

	// actually generate 10 random user profiles & load them in 'users_group' variable
	const users_group = profile(10);

	console.log("MMM", faker, users_group);

	useEffect(() => {
		const loggedInUser = localStorage.getItem("authenticated");
		console.log("dashboard", loggedInUser);
		if (loggedInUser) {
			setAuthenticated(loggedInUser);
		} else {
			navigate("/login");
		}
	}, []);

	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};

	return (
		<div>
			<p>Welcome to your Dashboard</p>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Created On</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users_group.map((data) => (
						<tr key={data.userId}>
							<td>{data.firstname}</td>
							<td>{data.lastname}</td>
							<td>{data.email}</td>
							<td>{data.createdOn}</td>
							<td>{data.userId}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={handleLogout}>logout</button>
		</div>
	);
};
