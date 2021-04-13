import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
	return (
		<nav className="navbar is-primary">
			<div className="navbar-menu">
				<div class="navbar-brand">
					<FontAwesomeIcon icon={faCloudSunRain} /> Weather app
				</div>
			</div>
		</nav>
	);
}
