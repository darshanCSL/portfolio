import "./Card.css";

const Card = (props) => {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className="card card-url"
			href={props.url}
		>
			<h3 className="card-title">{props.title}</h3>
			<p className="card-desc">{props.desc}</p>
		</a>
	);
};

export default Card;
