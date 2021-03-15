import {GENRES, PLATFORMS, SORT_BY, TAGS} from "./constants";

const GameFilter = ({onChange}) => (
    <form onChange={onChange}>
        <label htmlFor="platformSelect">Platform</label>
        <select name="platform" id="platformSelect">
            {PLATFORMS.map(platform => (
                <option key={platform.value} value={platform.value}>{platform.display}</option>
            ))}

        </select>

        <label htmlFor="genreSelect">Genre</label>
        <select name="genre" id="genreSelect">
            {GENRES.map(genre => (
                <option key={genre.value} value={genre.value}>{genre.display}</option>
            ))}

        </select>

        <label htmlFor="sortBySelect">Sort by</label>
        <select name="sortBy" id="sortBySelect">
            {SORT_BY.map(sortBy => (
                <option key={sortBy.value} value={sortBy.value}>{sortBy.display}</option>
            ))}

        </select>

        <label htmlFor="tagSelect">Tag</label>
        <select name="tag" id="tagSelect">
            {TAGS.map(tag => (
                <option key={tag.value} value={tag.value}>{tag.display}</option>
            ))}

        </select>
    </form>
)

export default GameFilter;