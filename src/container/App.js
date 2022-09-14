import { useEffect } from "react";
import "../components/ThemeConfig/Theme.css";

import "./App.css";
import ThemeProvider from "../components/ThemeConfig/ThemeProvider";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Project from "../components/Project/Project";
import Work from "../components/Work/Work";

function App() {
	const clickHandler = () => {
		const nav = document.querySelector(".navbar");
		const hamburger = document.querySelector(".hamburger-box");
		nav.classList.toggle("isActive");
		hamburger.classList.toggle("isActive");
	};

	useEffect(() => {
		const about = document.querySelector(".about");
		const header = document.querySelector(".header");
		const project = document.querySelector(".project");
		const skillsWrap = document.querySelector(".skills-wrap");
		const options = {
			threshold: 0,
			rootMargin: "-150px",
		};
		const observer = new IntersectionObserver(function (entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.target.className === "about") {
					about.classList.add("isActive");
				}
				if (entry.isIntersecting && entry.target.className === "project") {
					project.classList.add("isActive");
				}
				let skill = entry.target.className.toString().split(" ");
				if (entry.isIntersecting && skill[0] === "skills-wrap") {
					skillsWrap.classList.add("isActive");
				}
			});
		}, options);

		observer.observe(about);
		observer.observe(project);
		observer.observe(skillsWrap);

		window.addEventListener("scroll", () => {
			header.classList.add("isActive");
		});
	});

	return (
		<ThemeProvider>
			<div className="main" id="main">
				<Header clickHandler={clickHandler} />
				<Banner />
				<About />
				<Project />
				<Work />
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
