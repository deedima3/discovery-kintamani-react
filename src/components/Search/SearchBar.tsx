import React, { FC, SetStateAction } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// Add Animation for close and open

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ search, setSearch, placeholder }) => {
  return (
    <div className="w-max h-[60px] rounded-brand border-2 border-gray-300 overflow-hidden flex items-center px-2 py-2 gap-2">
      <MagnifyingGlassIcon className="w-10 h-10 text-gray-400" />
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        name="search"
        className="w-full h-full text-gray-500 font-poppins focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
