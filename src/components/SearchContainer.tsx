import React, { ReactNode, useState } from "react";
import { Error } from "../types/types";
import Search from "./Search";

type SearchContainerProps = {
  request: (searchText: string) => Promise<any>;
  results: any[] | undefined;
  setResults: (results: any) => void;
  children: (item: any) => ReactNode;
};

const SearchContainer = ({
  request,
  results,
  setResults,
  children,
}: SearchContainerProps) => {
  const [error, setError] = useState<Error>(null);

  return (
    <div>
      <Search
        asyncRequest={request}
        setResults={(results) => setResults(results)}
        setError={setError}
      />
      {results && results.length > 0 && (
        <ul>
          {results.map((item: any, index) => {
            return (
              <React.Fragment key={index}>{children(item)}</React.Fragment>
            );
          })}
        </ul>
      )}
      {results && results.length === 0 && <div>No results found</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SearchContainer;
