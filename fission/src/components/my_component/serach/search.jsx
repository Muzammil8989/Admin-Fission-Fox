import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ placeholder = "Search…", value, onChange, onSearch }) => {
  return (
    <div className="flex items-center p-4 w-2/6 rounded-full bg-[#F4F4F4] dark:bg-[#FDA33C]  shadow-md mt-8 hover:shadow-lg">
      <input
        className="ml-4 flex-grow bg-transparent outline-none text-gray-700 dark:text-white"
        placeholder={placeholder}
        aria-label="search"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <FaSearch 
        className="text-gray-500 mr-4 cursor-pointer" 
        onClick={onSearch} 
      />
    </div>
  );
};

export default Search;
