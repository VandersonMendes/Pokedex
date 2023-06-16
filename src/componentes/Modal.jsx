import React, { useState } from "react"
import styles from "../assets/css/Modal.module.css"
import axios from "axios"
import CardPokemon from "./CardPokemon"
const Modal = ({namePokemon, srcPokemon, modal, id}) => {
    const [pokemon, setPokemon] = useState('')
        // React.useEffect(() =>{
        //     axios.get(API_BASE +`pokemon/${id}`).then((resp) => setPokemon(resp))
        // },[])
    
        if(modal){
            return(
                <div className={styles.modal}>
                    <div><img src={pokemon.data.sprites.other.dream_world.front_default} alt={id} /></div>
                    <div>
                        <h1>asdfasdfasdfasdfasdf</h1>
                    </div>
                </div>
               )
            }
}
export default Modal