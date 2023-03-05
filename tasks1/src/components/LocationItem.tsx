import React, { ReactNode } from "react";
import { Location } from "../types/types";

type LocationProps = {
  item: Location;
  children?: ReactNode;
};

const LocationItem = ({ item }: LocationProps) => {
  return <li>{item.name}</li>;
};

export default LocationItem;
