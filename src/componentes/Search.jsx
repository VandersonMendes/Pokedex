import React from 'react'
import Lupa from "../assets/lupa.svg"
import styles from "../assets/css/Seach.module.css";
const Search = () => {
    function handleSubmit() {

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
            <input type="text"  />
            <button><img src={Lupa} alt="" /></button>
        </form>
    </div>
  )
}

export default Search