import React, { useEffect, useState } from "react";

type SearchProps = {
  asyncRequest: (searchText: string) => {};
  setResults: ({}: any) => void;
};

const Search = ({ asyncRequest, setResults }: SearchProps) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await asyncRequest(searchText);
      setResults(response);
    };
    fetchData();
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
