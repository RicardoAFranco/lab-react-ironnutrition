import { useState } from 'react';
import { Input } from "antd";

function SearchFood({ searchFoodList }) {
    const [query, setQuery] = useState();

    const handleInput = (event) => {
        setQuery(event.target.value);

        searchFoodList(event.target.value);
    }

    return (
        <div className="SearchFood">
            <label>Search:</label>

            <Input type="text" name="" value={query} onChange={handleInput} />

        </div>
    );
}

export default SearchFood;