import React, { useEffect, useState } from "react";

type SearchProps = {
  asyncRequest: (searchText: string) => {};
  setResults: ({}: any) => void;
};

const Search = ({ asyncRequest, setResults }: SearchProps) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    let isIgnored = false;
    const fetchData = async () => {
      const response = await asyncRequest(searchText);
      if (!isIgnored) {
        setResults(response);
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
