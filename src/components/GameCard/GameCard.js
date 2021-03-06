import {Link} from "react-router-dom";

const GameCard = ({content}) => {
    const {id, title, thumbnail, short_description, genre} = content;

    const link = `/game/${id}`

    return (
        <Link to={link}>
            <img src={thumbnail} alt={`${title} logo`}/>
            <h2>{title}</h2>
            <p>{short_description}</p>
            <p>{genre}</p>
        </Link>
    )
}

export default GameCard
