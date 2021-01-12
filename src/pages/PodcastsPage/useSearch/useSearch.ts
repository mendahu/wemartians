import Fuse from "fuse.js";
import { useEffect, useState } from "react";
import { Episode } from "../../../types/common";

export default function useSearch(episodes: Episode[]) {
  const [results, setResults] = useState(episodes);
  const [searchTerm, setSearchTerm] = useState("");

  const fuse = new Fuse(episodes, {
    keys: [
      {
        name: "title",
        weight: 3,
      },
      {
        name: "description",
        weight: 2,
      },
      {
        name: "longDescription",
        weight: 1,
      },
    ],
  });

  useEffect(() => {
    if (searchTerm === "") {
      setResults(episodes);
    } else {
      const searchResults = fuse.search(searchTerm);
      setResults(searchResults.map((result) => result.item));
    }
  }, [searchTerm]);

  return {
    results,
    searchTerm,
    setSearchTerm,
  };
}
