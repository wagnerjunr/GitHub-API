import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import './search.css'

type loadUserProps = {
  loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: loadUserProps) => {

  const [userName, setUserName] = useState("");

  return (
    <div className='container-search'>
        <h2>Busque por Usuário</h2>
        <p>Conheça seu repositórios</p>
      <div className='search-forms'>
        <input onChange={(e) => setUserName(e.target.value)} type='text' placeholder='Nome do Usuário'></input>
        <button onClick={() => loadUser(userName)}><FaMagnifyingGlass /></button>
      </div>
    </div>

  )
}

export default Search;
