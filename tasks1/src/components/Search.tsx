import React, { useEffect, useState } from "react";

type Error = string | null;

type SearchProps = {
  asyncRequest: (searchText: string) => {};
  setResults: ({}: any) => void;
  setError: (errorMessage: Error) => void;
};

const Search = ({ asyncRequest, setResults, setError }: SearchProps) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let isIgnored = false;
    const fetchData = async () => {
      try {
        const response = await asyncRequest(searchText);
        console.log(response);
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
    fetchData();

    return () => {
      isIgnored = true;
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
