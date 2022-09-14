import "./Project.css";

import { Projects } from "./Projects";
import Card from "./Card/Card";

const Project = () => {
	return (
		<section className="project" id="project">
			<div className="container">
				<h2 className="title">My Projects</h2>
				<div className="project-wrap d-flex space-center align-center">
					<div className="card-list d-flex flex-wrap space-center">
						{Projects.map((project, i) => {
							return (
								<Card
									key={i}
                                    img={project.img}
                                    url={project.url}
									title={project.title}
									desc={project.desc}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
