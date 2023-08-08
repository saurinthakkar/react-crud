//import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { Add } from "./components/Add";
import { Register } from "./components/Register";
import { Dashboard } from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Edit } from "./components/Edit";
import { View } from "./components/View";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users/add" element={<Add />} />
				<Route path="/users/edit" element={<Edit />} />
				<Route path="/users/view" element={<View/>} />
				<Route path="/dashboard" element={<Dashboard />} />
				{/* Add a catch-all route to redirect to the login page */}
				<Route path="*" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
