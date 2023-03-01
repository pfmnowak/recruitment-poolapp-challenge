import React, { useState } from "react";
import { searchSpaces } from "../../service/search";
import { Error, LocationsArray } from "../../types/types";
import Search from "../Search";

const Locations = () => {
  const [locations, setLocations] = useState<LocationsArray>();
  const [error, setError] = useState<Error>(null);

  return (
    <div>
      <Search
        asyncRequest={searchSpaces}
        setResults={(results) => setLocations(results.spaces)}
        setError={setError}
      />
      {locations && locations.length > 0 && (
        <ul>
          {locations.map((item: any) => {
            return <li key={item.name}>{item.name}</li>;
          })}
        </ul>
      )}
      {locations && locations.length === 0 && <div>No results found</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Locations;
