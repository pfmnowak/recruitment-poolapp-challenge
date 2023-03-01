import React, { useState } from "react";
import { searchAddress } from "../../service/searchAddress";
import { AddressesArray, Error } from "../../types/types";
import Search from "../Search";

const Addresses = () => {
  const [addressess, setAddressess] = useState<AddressesArray>();
  const [error, setError] = useState<Error>(null);

  return (
    <div>
      <Search
        asyncRequest={searchAddress}
        setResults={(results) => setAddressess(results.addresses)}
        setError={setError}
      />
      {addressess && addressess.length > 0 && (
        <ul>
          {addressess.map((item: any) => {
            return (
              <li key={item.address}>{`${item.address}, ${item.country}`}</li>
            );
          })}
        </ul>
      )}
      {addressess && addressess.length === 0 && <div>No results found</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Addresses;
