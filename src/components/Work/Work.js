import "./Work.css";

const Work = () => {
	return (
		<section className="work" id="work">
			<div className="container">
				<div className="work-wrap d-flex space-center align-center flex-column">
					<h3 className="title">My Work Experience</h3>
					<ul className="list">
						<li className="item">
							<h4 className="sub-title">Media.Net</h4>
							<p className="desc">
								Worked with UI Team and translated designs into
								responsive web pages and user interactions with high precision
								using HTML, CSS, JavaScript.
							</p>
							<p className="desc">
								Creating Web Pages compatible for Modern or older browsers as
								per required criteria with best Front-end practices.
							</p>
							<p className="desc">
								Worked on WordPress and implemented multiple mobile responsive sites
								and conducted research on plugins suitable for our use.
							</p>
							<p className="desc">
								Created Documentation for daily tasks to reduce workaround time for team and involved in code reviewing and knowledge sharing sessions.
							</p>
							<p className="desc">
								Worked alongside Business Developers to fulfill client
								requirements, fix UI issues, host sites and trying out certain
								features.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Work;
