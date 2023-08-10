//import "./styles.css";
import * as React from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Users } from "./Pages/Users";
import { Add } from "./Pages/Add";
import { Register } from "./Pages/Register";
import { Dashboard } from "./Pages/Dashboard";
import { Edit } from "./Pages/Edit";
import { View } from "./Pages/View";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AuthLayout } from "./LayoutRoute/AuthLayout";
import { NonAuthLayout } from "./LayoutRoute/NonAuthLayout";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route element={<NonAuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>

				<Route path="/" element={<AuthLayout />}>
					<Route path="users" element={<Users />} />
					<Route path="users/add" element={<Add />} />
					<Route path="users/edit" element={<Edit />} />
					<Route path="users/view" element={<View />} />
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
				<Route path="*" element={<Login />} />
			</Routes>
			<Footer />
		</React.Fragment>
	);
}

export default App;
