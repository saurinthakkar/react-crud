//import "./styles.css";
import * as React from "react";
import { useState,createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Pages/Login";
import { Users } from "./components/Pages/Users";
import { Add } from "./components/Pages/Add";
import { Register } from "./components/Pages/Register";
import { Dashboard } from "./components/Pages/Dashboard";
import { Edit } from "./components/Pages/Edit";
import { View } from "./components/Pages/View";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { fakeAuthProvider } from "./auth";
import { useContext } from "react";
import { useAuth } from "./index";
function App() {
	const signin = useAuth()
	console.log("FREE", signin);
	return (
		<Layout>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users/add" element={<Add />} />
				<Route path="/users/edit" element={<Edit />} />
				<Route path="/users/view" element={<View />} />
				<Route path="/dashboard" element={<Dashboard />} />
				{/* Add a catch-all route to redirect to the login page */}
				<Route path="*" element={<Login />} />
			</Routes>
		</Layout>
	);
}



export const Layout = ({ children }) => {
	return (
		<div>
			<div>
				<Header />
			</div>
			{children}
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default App;
