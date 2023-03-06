import React, { useState } from "react";
import { searchAddress } from "../../service/searchAddress";
import { AddressesArray } from "../../types/types";
import AddressItem from "../AddressItem";
import SearchContainer from "../SearchContainer";

const Addresses = () => {
  const [addressess, setAddressess] = useState<AddressesArray>();

  return (
    <>
      <SearchContainer
        request={searchAddress}
        setResults={(results) => setAddressess(results.addresses)}
        results={addressess}
      >
        {(item: any) => <AddressItem item={item}></AddressItem>}
      </SearchContainer>
    </>
  );
};

export default Addresses;
