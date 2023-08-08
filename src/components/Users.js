import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import * as faker from 'faker';
import * as faker from "@faker-js/faker";
import { formattedDate } from "./helper";
import { Button } from 'react-bootstrap';
import "../assets/styles/styles.css"


function randomProfile() {
	return {
		userId: faker.faker.datatype.uuid(),
		firstname: faker.faker.person.firstName(),
		lastname: faker.faker.person.lastName(),
		gender: faker.faker.person.sexType(),
		birthdate: faker.faker.date.birthdate(),
		address: faker.faker.location.streetAddress() + faker.faker.phone.number(),
		email: faker.faker.internet.email(),
		createdOn: faker.faker.date.past(),
		status: faker.faker.person.prefix(),
	};
}

export const Users = () => {
	const [authenticated, setAuthenticated] = useState(null);
	const [userData, setUserData] = useState([]);
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

	useEffect(() => {
		const loggedInUser = localStorage.getItem("authenticated");
		console.log("dashboard", loggedInUser);
		if (loggedInUser) {
			setAuthenticated(loggedInUser);
			if (users_group.length > 0) {
				setUserData(users_group);
			}
		} else {
			navigate("/login");
		}
	}, []);

	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};

	const deleteUser = () => {
		alert("Hello")
	}
	const buttonContainer = (
		<span>
			<button>view</button>
			<button>edit</button>
			<button>del</button>
		</span>
	);
	console.log("MMM", faker, userData);

	const navigateToAddUser = () => {
		navigate("/users/add", {
			state: {
				userData
			}
		});
	};
	return (
		<div>
			<p>Welcome to your Dashboard</p>
			<button onClick={navigateToAddUser}>Add User</button>
			<Button className="text-capitalize">Hello</Button>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Created On</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{userData.map((data) => (
						<tr key={data.userId}>
							<td>{data?.userId}</td>
							<td>{data.firstname}</td>
							<td>{data.lastname}</td>
							<td>{data.email}</td>
							<td>{formattedDate(data.createdOn)}</td>
							<td>{buttonContainer}</td>
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={handleLogout}>logout</button>
		</div>
	);
};
