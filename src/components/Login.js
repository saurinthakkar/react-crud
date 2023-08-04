import React, { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [authenticated, setAuthenticated] = useState(
		localStorage.getItem(localStorage.getItem("authenticated") || false)
	);
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		// Replace these credentials with your actual login validation logic
		const validEmail = "sthakkar@codal.com"; // Replace with your username
		const validPassword = "123456"; // Replace with your password

		if (email === validEmail && password === validPassword) {
			// Redirect to the dashboard page if the credentials are correct
			setAuthenticated(true);
			localStorage.setItem("authenticated", true);
			navigate("/users");
		} else {
			alert("Invalid credentials. Please try again.");
		}
	};

	useEffect(() => {
		setEmail("sthakkar@codal.com");
	}, []);

	return (
		<div>
			<div>
				<Header />
			</div>

			<div className="container">
				{/* <div className="pb-10  text-center">Login</div> */}
				<div className="border-2 bg-white p-5 rounded border-gray-300">
					<form>
						<div className="flex flex-col">
							<label for="email" className="mb-2">
								Email Address &nbsp;<span className="text-red-600">*</span>
							</label>
							<input
								className="border-2 p-2 focus:outline-1 focus:outline-blue-200 mb-1 rounded-md"
								type="text"
								placeholder="sthakkar@codal.com"
								name="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div className="text-gray-400 text-xs pb-4">
								Hint: sthakkar@codal.com
							</div>
						</div>
						<div className="flex flex-col">
							<label for="email" className="mb-2">
								Password &nbsp;<span className="text-red-600">*</span>
							</label>
							<input
								className="border-2 p-2 focus:outline-1 focus:outline-blue-400 mb-1 rounded-md"
								type="password"
								placeholder="123456"
								name="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className="text-gray-400 text-xs pb-4">Hint: 123456</div>
						</div>
						<div>
							<button className="bg-blue-700 text-white w-full h-9 rounded-md mb-2">
								Login
								<i class="fa fa-arrow-right w-1"></i>
							</button>
							<div>
								Don't have an account?{" "}
								<Link href="google.com" className="text-blue-700 underline">
									Sign Up
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};
