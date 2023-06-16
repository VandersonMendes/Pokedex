import React, { useState } from 'react'
import styles from "../assets/css/Seach.module.css";
import { useAppProvider } from './context/ContextApp';
import Lupa from "../assets/img/lupa.svg"
const Search = () => {
  const {setValuePokemon, valuePokemon} = useAppProvider()
  const [value, setValue] = useState('');
  function handleChange({target}){
     setValue(target.value)
  }
    function handleSubmit(e) {
      e.preventDefault();
      setValuePokemon([value])
    }
 
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
            <input type="text"  onChange={handleChange} placeholder='Digite o nome do pokemon ou id' required />
            <button>Buscar</button>
        </form>
    </div>
  )
}

export default Search