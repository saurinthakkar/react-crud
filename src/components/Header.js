import reactLogo from "../assets/img/react.svg";
import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/styles/styles.css"


export const Header = () => {

	const [authenticated, setAuthenticated] = useState(null)
	const navigate = useNavigate();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("authenticated");
		console.log("dashboard", loggedInUser);
		if (loggedInUser) {
			setAuthenticated(loggedInUser);

		}
	}, [])
	const handleLogout = () => {
		localStorage.clear();
		navigate("/login");
	};
	return (
		<nav className="header-container">
			<div className="flex bg-black">
				<Link to="/login" className="pl-20">
					<img
						src={reactLogo}
						className="h-20 w-20 p-4 animate-spin-slow"
						alt="React logo"
					/>
				</Link>
				{authenticated && (<Link to="/dashboard" className="pl-5 pt-6 text-white">
					Dashboard
				</Link>)}
				{authenticated && (<Link to="/users" className="pl-5 pt-6 text-white">
					Users
				</Link>)}
				{authenticated && (
					<div className="flex-grow flex justify-end pr-20 ">
						<button className="text-black bg-cyan-500 h-10 px-3 mt-5 rounded" onClick={handleLogout}>
						<i class="fa fa-power-off me-2"></i>Logout
						</button>
					</div>)}
			</div>
		</nav>
	);
};
