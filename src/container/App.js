import { useEffect } from "react";
import "../Components/ThemeConfig/Theme.css";

import "./App.css";
import ThemeProvider from "../Components/ThemeConfig/ThemeProvider";
import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Project from "../Components/Project/Project";
import Work from "../Components/Work/Work";

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
