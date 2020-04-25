'user strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type ='search'
      placeholder ='Digite o nome do usuário do GitHub'
      disabled = { isDisabled }
      onKeyUp = { handleSearch }
      />
  </div>
)


export default Search
