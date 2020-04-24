'user strict'

import React from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type ='search'
      placeholder ='Digite o nome do usuário do GitHub'
      onKeyUp = { handleSearch }
      />
  </div>
)


export default Search
