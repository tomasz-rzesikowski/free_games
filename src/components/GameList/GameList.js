import GameCard from "../GameCard/GameCard";
import GameFilter from "../GameFilter/GameFilter";

const GameList = ({games, onFilterChange}) => {

    return (
        <>
            <GameFilter onChange={onFilterChange}/>
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        <GameCard content={game}/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default GameList
