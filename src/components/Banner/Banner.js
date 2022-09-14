import "./Banner.css";
import Pdf from "../../assets/docs/darshanlakade-resume.pdf";

const Banner = () => {
	return (
		<section className="banner">
			<div className="bg-image"></div>
			<div className="container">
				<div className="banner-wrap d-flex space-center align-center flex-column">
					<a
						href={Pdf}
						target="_blank"
						download="darshanlakade-resume.pdf"
						className="resume"
					>
						Download Resume
					</a>
					<h1 className="title">
						<span>Hello</span>I'm Front-end Developer
					</h1>
					<p className="author">- Darshan Lakade</p>
				</div>
			</div>
		</section>
	);
};

export default Banner;
