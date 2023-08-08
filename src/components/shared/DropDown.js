import React, { useState } from "react";
import {
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

const Dropdown = () => {
	const [dropdownOpen, setOpen] = React.useState(false)

	const toggle = () => setOpen(!dropdownOpen);

	return (
		<ButtonDropdown
			toggle={() => {
				setOpen(!dropdownOpen);
			}}
			isOpen={dropdownOpen}
		>
			<DropdownToggle className="text-black !pr-8 !hover:bg-transparent" caret>
				All
			</DropdownToggle>
			<DropdownMenu className="rounded-none">
				<DropdownItem>All</DropdownItem>
				<DropdownItem>Active</DropdownItem>
				<DropdownItem>Inactive</DropdownItem>
			</DropdownMenu>
		</ButtonDropdown>
	);
};

export default Dropdown;
