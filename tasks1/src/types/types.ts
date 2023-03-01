export type AddressesArray = Address[];
export type Address = {
  address: string;
  country: string;
};

export type LocationsArray = Location[];
export type Location = {
  name: string;
};

export type Error = string | null;

export type JsonForms = JsonForm[];
export type JsonForm = {
  name: string;
  content: string;
};

export type ObjectKeys = string[];

export type Diffs = {
  name: string;
  diff: Set<string>;
}[];
