import React, { ReactNode } from "react";
import { Address } from "../types/types";

type AddressProps = {
  item: Address;
  children?: ReactNode;
};

const AddressItem = ({ item }: AddressProps) => {
  return <li>{`${item.address}, ${item.country}`}</li>;
};

export default AddressItem;
