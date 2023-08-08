import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Dashboard = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div>
				<Header />
			</div>
			<div className="flex-grow rounded-md bg-gray-50 px-[250px] pb-56">
				Dashboard
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};