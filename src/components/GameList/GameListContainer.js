import GameList from "./GameList";
import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {API_HOST, API_KEY} from "./Constance";


const GameListContainer = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState("");
    const [filter, setFilter] = useState({
        platform: 'browser',
        sortBy: 'relevance'
    })

    const {platform, genre, tag, sortBy} = filter

    useEffect(() => {
        const {platform, genre, tag, sortBy} = filter

        axios
            .get('/games', {
                baseURL: `https://${API_HOST}/api`,
                headers: {
                    'x-rapidapi-key': API_KEY,
                    'x-rapidapi-host': API_HOST,
                },
                params: {
                    platform, category: genre, tag, 'sort-by': sortBy
                }
            })
            .then(res => setGames(res.data))
            .catch(e => setError(e.message))
    }, [filter])

    const onFilterChange = useCallback(e => {
        setFilter(current => ({
            ...current,
            [e.target.name]: e.target.value,
        }))

        e.preventDefault();
    }, [])

    return <GameList games={games} onFilterChange={onFilterChange}/>
}

export default GameListContainer

