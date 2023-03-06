import React, { useEffect, useState } from "react";
import delay from "../helpers/delay";
import { Error } from "../types/types";

const DEBOUNCE_MS = 500;

type SearchProps = {
  asyncRequest: (searchText: string) => Promise<any>;
  setResults: (results: any) => void;
  setError: (errorMessage: Error) => void;
};

const Search = ({ asyncRequest, setResults, setError }: SearchProps) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let isIgnored = false;
    const fetchData = async () => {
      try {
        const response = await asyncRequest(searchText).then(await delay(200));

        if (!isIgnored) {
          setResults(response);
          setError(null);
        }
      } catch (error) {
        if (!isIgnored) {
          setResults({});
          setError("Something went wrong!");
        }
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, DEBOUNCE_MS);

    return () => {
      isIgnored = true;
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <input
      type="search"
      onChange={(event) => setSearchText(event.target.value)}
      placeholder="Search..."
      autoFocus
    />
  );
};

export default Search;
