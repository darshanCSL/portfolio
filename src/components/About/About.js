import "./About.css";
import logo from "../../assets/images/about-me.jpg";

const About = () => {

	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about-wrap d-flex space-between align-center">
					<div className="left-content">
						<h2 className="title">About Me</h2>
						<p className="desc">
							Hi! I'm Darshan, A Front-end Developer who loves to code and keep learning.
						</p>
						<p className="desc">
							Have been working with Front-end technologies like HTML5, CSS3, Javascript, React etc professionally for more than 3+ years.
						</p>
						<p className="desc">
							Love coding, Debugging and trying out new features.
						</p>
						<p className="desc">
							Apart from my professional life I also like to sketch and play guitar and chill out.
						</p>
					</div>
					<div className="right-content">
						<img src={logo} className="img-responsive" alt="About me" />
					</div>
				</div>
				<h3 className="title skills">My Skills</h3>
				<div className="skills-wrap d-flex space-between align-start space-around">
					<ul className="list">
						<li className="item">
							<p className="desc">HTML / HTML5</p>
							<span>95%</span>
						</li>
						<li className="item">
							<p className="desc">CSS / CSS3</p>
							<span>90%</span>
						</li>
						<li className="item">
							<p className="desc">Javascript</p>
							<span>87%</span>
						</li>
						<li className="item">
							<p className="desc">React</p>
							<span>82%</span>
						</li>
						<li className="item">
							<p className="desc">Typescript</p>
							<span>70%</span>
						</li>
					</ul>
					<ul className="secondary-list">
						<li className="item">
							<p className="desc">MySQL</p>
						</li>
						<li className="item">
							<p className="desc">Wordpress</p>
						</li>
						<li className="item">
							<p className="desc">SCSS</p>
						</li>
						<li className="item">
							<p className="desc">Bootstrap</p>
						</li>
						<li className="item">
							<p className="desc">Git</p>
						</li>
						<li className="item">
							<p className="desc">GitLab</p>
						</li>
						<li className="item">
							<p className="desc">GitHub</p>
						</li>
						<li className="item">
							<p className="desc">VSCode</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
