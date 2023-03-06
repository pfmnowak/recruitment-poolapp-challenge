import React, { useState } from "react";
import { searchSpaces } from "../../service/search";
import { LocationsArray } from "../../types/types";
import LocationItem from "../LocationItem";
import SearchContainer from "../SearchContainer";

const Locations = () => {
  const [locations, setLocations] = useState<LocationsArray>();

  return (
    <>
      <SearchContainer
        request={searchSpaces}
        setResults={(results) => setLocations(results.spaces)}
        results={locations}
      >
        {(item: any) => <LocationItem item={item}></LocationItem>}
      </SearchContainer>
    </>
  );
};

export default Locations;
