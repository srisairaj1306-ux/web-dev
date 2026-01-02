function Card({ img, title }) {
    return (
        <div className="card">
            <img src="url(/assets/back.png)" alt={`${title} logo`} />
            <h3>{title}</h3>
            <button>Learn</button>
        </div>
    );
}


export default Card;
