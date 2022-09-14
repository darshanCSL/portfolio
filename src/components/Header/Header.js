import React, { useContext } from "react";
import { Link } from "react-scroll";

import ThemeContext from "../ThemeConfig/ThemeContext";
import "./Header.css";

const themeOptions = [{ value: "light" }, { value: "dark" }];

const Header = (props) => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<section className="header" id="header">
			<div className="container">
				<div className="d-flex space-between align-center">
					<a href="/" className="logo-wrap" aria-label="Website Logo"></a>
					<nav className="navbar">
						<div className="overlay" onClick={props.clickHandler}></div>
						<ul className="nav-list d-flex space-around">
							<li className="nav-item">
								<Link
									className="nav-link"
									to="main"
									onClick={props.clickHandler}
									smooth={true}
									duration={700}
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="about"
									onClick={props.clickHandler}
									smooth={true}
									duration={700}
								>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="project"
									onClick={props.clickHandler}
									smooth={true}
									duration={700}
								>
									Projects
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="work"
									onClick={props.clickHandler}
									smooth={true}
									duration={700}
								>
									Experience
								</Link>
							</li>
						</ul>
					</nav>
					<div className="hamburger-box" onClick={props.clickHandler}>
						<div className="hamburger"></div>
					</div>
					<div
						className="mode-btn"
						value={theme}
						onClick={(e) => setTheme(e.target.value || e.target.id)}
					>
						{themeOptions.map((option, idx) => {
							if (theme !== option.value) {
								return (
									<button className="toggle-btn" value={option.value} key={idx} aria-label="Toggle Theme Mode">
										<div className="knobs" id={option.value} key={idx}></div>
									</button>
								);
							}
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
