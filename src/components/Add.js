import "./add.css";
import { useState, useEffect } from "react";
import { useNavigate,useLocation,Link } from "react-router-dom";

export const Add = () => {
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [gender, setGender] = useState("");
	const [address, setAddress] = useState("");
	const [note, setNote] = useState("");
	const [status, setStatus] = useState("");
	const [emptyFirstName, setEmptyFirstName] = useState(false);
	const [emptyLastName, setEmptyLastName] = useState(false);
	const [emptyEmail, setEmptyEmail] = useState(false);

	const { state } = useLocation();

	const navigate = useNavigate();

	const backToList = () => {
		navigate("/users");
	};

	const createUser = () => {
		if (firstname?.length === 0) {
			setEmptyFirstName(true);
		} else if (lastname?.length === 0) {
			setEmptyLastName(true);
		} else if (emailAddress?.length === 0) {
			setEmailAddress(true);
		} else {
			setEmptyFirstName(false);
			setEmptyLastName(false);
			setEmptyEmail(false);
		}
	};
	
	console.log("KKK",state)

	return (
		<div>
			<div>
				{" "}
				{/**Container to give left and right padding in both section */}
				<div>Header</div>
				<div>
					<div>
						<div>
							<Link to="/users">Dashboard</Link> /&nbsp;
							<Link to="/users">Users</Link> /&nbsp;
							<a>Add</a>
						</div>
					</div>
					<div>
						<div className="addform-container">
							<h1>Users</h1>
							<button onClick={backToList}>
								<i
									class="fa fa-arrow-left fa-xs"
									style={{ paddingRight: "10px" }}
								></i>
								Back to List
							</button>
						</div>
						<div className="container-form-1">
							<div className="add-form-border-conatiner">
								<form onSubmit={createUser}>
									<div className="add-container-1">
										<div className="fname-lname-label-input-container width-50 padding-right-10">
											<label>
												First Name<span class="required">*</span>
											</label>
											<input
												type="text"
												value={firstname}
												onChange={(e) => setFirstName(e.target.value)}
												required
												className="input-class"
											/>
											{emptyFirstName && (
												<div class="invalid-feedback">Required</div>
											)}
										</div>
										<div className="fname-lname-label-input-container width-50 padding-right-10 ">
											{" "}
											<label>
												Last Name<span class="required">*</span>
											</label>
											<input
												type="text"
												value={lastname}
												onChange={(e) => setLastName(e.target.value)}
												required
												className="input-class invalid-input"
											/>
											{emptyLastName && (
												<div class="invalid-feedback">Required</div>
											)}
										</div>
									</div>
									<div className="fname-lname-label-input-container width-100 padding-right-10">
										<label>
											Email Address<span class="required">*</span>
										</label>
										<input
											type="text"
											value={emailAddress}
											onChange={(e) => setEmailAddress(e.target.value)}
											required
											className="input-class invalid-input"
										/>
										{emptyEmail && (
											<div class="invalid-feedback">Required</div>
										)}
									</div>
									<div>
										<label>
											Gender<span class="required">*</span>
										</label>
										<div className="btn-group">
											<button>Male</button>
											<button>Female</button>
											<button>Other</button>
											<button>Dont want to disclose</button>
										</div>
									</div>
									<div className="fname-lname-label-input-container width-100 padding-right-10">
										<label>Address</label>
										<textarea
											type="text"
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											className="input-class"
										/>
									</div>
									<div className="fname-lname-label-input-container width-100 padding-right-10">
										<label>Note</label>
										<textarea
											type="text"
											value={note}
											onChange={(e) => setNote(e.target.value)}
											className="input-class"
										/>
									</div>
									<div className="fname-lname-label-input-container width-100 padding-right-10">
										<label>
											Status<span class="required">*</span>
										</label>
										<div className="btn-group">
											<button>Active</button>
											<button>Inactive</button>
										</div>
									</div>
									<div className="submit-container">
										<button>Add</button>
										<button>
											<i
												class="fa fa-random"
												style={{ paddingRight: "10px" }}
											></i>
											Random Data
										</button>
									</div>
								</form>
							</div>
						</div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};
