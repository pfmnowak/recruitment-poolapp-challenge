import React, { useState } from "react";
import { searchSpaces } from "../service/search";
import Search from "./Search";

type Locations = Location[];

type Location = {
  name: string;
};

const Locations = () => {
  const [locations, setLocations] = useState<Locations>();

  return (
    <div>
      <Search
        asyncRequest={searchSpaces}
        setResults={(results) => setLocations(results.spaces)}
      />
      {locations && locations.length > 0 && (
        <ul>
          {locations.map((item: any) => {
            return <li key={item.name}>{item.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Locations;
