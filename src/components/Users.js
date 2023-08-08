import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../assets/styles/styles.css";
import { Button, Input, Table } from "reactstrap";
import { Pagination } from "./shared/Pagination";
import PropTypes from "prop-types";
import Dropdown from "./shared/DropDown";
import * as faker from "@faker-js/faker";
import { formattedDate } from "./helper";

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
	const [userData, setUserData] = useState([]);
	const [authenticated, setAuthenticated] = useState(null);
	const navigate = useNavigate();

	const profile = function (max_size) {
		const users = [];
		for (let index = 0; index < max_size; index++) {
			users.push(randomProfile());
		}
		return users;
	};

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
		alert("Hello");
	};

	const actionsArray = [
		{ function: "sort", name: "Active" },
		{ function: "sort", name: "Active" },
	];
	const buttonContainer = (
		<span>
			<button>view</button>
			<button>edit</button>
			<button>del</button>
		</span>
	);
	console.log("MMM", faker, userData);
	return (
		<div className="flex flex-col min-h-screen">
			<div>
				<Header />
			</div>
			<div className="flex-grow rounded-md bg-gray-50 px-[100px] pb-56 min-h-screen flex flex-col">
				<div className="mt-4 mb-3 bg-gray-400 h-14 rounded">
					<div className="py-3 pl-5">
						<Link to="/dashboard">Dashboard</Link>&nbsp;/ &nbsp;
						<Link to="/users">Users</Link>&nbsp;/ &nbsp;
						<Link className="text-black no-underline">List</Link>
					</div>
				</div>
				<div className="mt-4 mb-0 font-bold">
					<div className="flex justify-between py-3">
						<div className="flex flex-grow justify-between">
							<h1 className="text-4xl w-2/5">Users</h1>
							<div className="">
								<Button className="my-2 mx-1">+ Add a User</Button>
								<Button className="my-2 mx-1 bg-transparent !text-gray-500">
									<i class="fa fa-xs me-2 fa-random"></i>
									Add Random Users
								</Button>
								<Button className="my-2 mx-1 bg-transparent !text-gray-500">
									<i class="fa fa-filter fa-xs me-2"></i>Reset Filter
								</Button>
								<Button className="my-2 mx-1 btn-outline-danger bg-transparent">
									<i class="fa fa-trash me-2"></i>Delete All Users
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-grow mt-10 mb-0 flex flex-col">
					<div className="border-gray-200 border-2 rounded flex flex-col">
						<div className=" border-black border-2 rounded mx-3 my-6 flex min-h-max flex-col">
							<div className="flex justify-between">
								<div className="w-1/2">
									Show{" "}
									<span>
										<Dropdown
											buttonDropdownName="status"
											actionsArray={actionsArray}
										/>
									</span>
									&nbsp;entries
								</div>
								<div className="w-1/2">Search Box</div>
							</div>
							<div>
								<Table bordered hover>
									<thead>
										<tr>
											<th>ID</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Email</th>
											<th>Created On</th>
											<th>Status</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<Input />
											</td>
											<td>
												<Input />
											</td>
											<td>
												<Input />
											</td>
											<td>
												<Input />
											</td>
											<td>
												<Input />
											</td>
											<td>
												<Dropdown
													buttonDropdownName="status"
													actionsArray={actionsArray}
												/>
											</td>
										</tr>
										{userData.map((data) => (
											<tr key={data.userId}>
												<td>{data?.userId}</td>
												<td>{data.firstname}</td>
												<td>{data.lastname}</td>
												<td>{data.email}</td>
												<td>{formattedDate(data.createdOn)}</td>
												<td>Active</td>
												<td>{buttonContainer}</td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
							<div className="flex justify-between">
								<div>Showing 1 to 10 of 3001 entries</div>
								<div>
									<Pagination />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
