import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./components/style";
import { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fakeAuthProvider } from "./auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);

let AuthContext = createContext(null);

export function AuthProvider({ children }) {
	let [user, setUser] = useState(null);

	let signin = (newUser, callback) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser);
			callback();
		});
	};

	let signout = (callback) => {
		return fakeAuthProvider.signout(() => {
			setUser(null);
			callback();
		});
	};

	let value = { user, signin, signout };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	return React.useContext(AuthContext);
}