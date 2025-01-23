import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
const SearchBar = ({onSearch}) => {

  const [query, setQuery] = useState()

  const handleSearch = () => {
    onSearch(query);
  }

  return (
              <div className="relative sm:w-72 w-40 space-x-2 ">
                <BiSearchAlt2 onClick={handleSearch} className="absolute inline-block left-3 inset-y-2" />
                <input
                  type="text"
                  value={query}
                  placeholder="search a product"
                  onChange={(e) => setQuery(e.target.value)}
                  className="bg-[#EAEAEA] w-full py-1 px-6 md:px-8 rounded-md focus:outline-none"
                />
              </div>
    
  )
}

export default SearchBar