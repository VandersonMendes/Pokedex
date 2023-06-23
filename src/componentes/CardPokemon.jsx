import { useEffect, useState } from "react";
import styles from "../assets/css/CardPokemon.module.css";
import SetaVoltar from "../assets/img/icons8-voltar-50.png"
import axios from "axios";
import IconeGrafico from "../assets/img/icons8-gráfico-48 (1).png"

const CardPokemon = ({ pokemon }) => {
  const [color, setColor] = useState(null);
  const [weakness, setWeakness] = useState(null);

  const [buttonStats, setButtonStats] = useState(false)
  useEffect(() => {
    // Função onde está puxando a url (pokemon.types[0].type.url), e está dando uma resposta onde pega a fraqueza do pokemon
    async function getWeakness() {
      await axios.get(pokemon.types[0].type.url).then((resp) => setWeakness(resp.data))
    }
    switch (pokemon.types[0].type.name || pokemon.types[1].type.name) {
      case 'fire':
        setColor('#FF0000')
        break;
      case 'grass':
        setColor('#008000')
        break;
      case 'water':
        setColor('#0fa1f2')
        break;
      case 'dark':
        setColor('#7b797d')
        break;
      case 'normal':
        setColor('gray');
        break;
      case 'flying':
        setColor('#e07a00')
        break;
      case 'poison':
        setColor('#a499c9')
        break;
      case 'fighting':
        setColor('#a3611c')
        break;
      case 'rock':
        setColor('#85834a')
        break;
      case 'bug':
        setColor('#003f4d')
        break;
      case 'fairy':
        setColor('#d7bdbc')
        break;
      case 'psychic':
        setColor('#efaba6')
        break;
      case 'electric':
        setColor('#ffe100c7')
        break;
      case 'ground':
        setColor('#e6ad8e')
        break;
      case 'fairy':
        setColor('#f6c8dd')
        break;
      case 'ice':
        setColor('#93d3c6')
        break
      case 'dragon':
        setColor('#729bd5')
        break
      default:
        setColor('#afd9fb')
        break
    }
    getWeakness()
  }, [pokemon])
  // Função toggle para o button de ver mais estatisticas !
  const toggle = () => {
    setButtonStats(!buttonStats)
  }
  return (
      <section className={`${styles.ContainerCard} ${styles.animeLeft} `}>
        <div className={styles.cardFlex}>
          <div style={{ backgroundColor: `${color}` }} className={styles.img}>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.id} />
          </div>
          <div className={styles.status}>
            <div className={styles.name}>
              <h1>{pokemon.name} </h1>
              <span className={styles.id}>#{pokemon.id}</span>
            </div>
            <div className={styles.type}>
              {pokemon.types.length === 2 ? (
                <div className={styles.typeFlex}>
                  <span style={{ color: `${color}` }}>{pokemon.types[0].type.name}</span >
                  <span style={{ color: `${color}` }}>{pokemon.types[1].type.name}</span>
                </div>
              ) : (
                <div className={styles.typeFlex}><span>{pokemon.types[0].type.name}</span></div>
              )}
            </div>
            <div className={styles.caracteristicas}>
              <span>Peso: {pokemon.weight}kg</span>
              <span>Altura: {pokemon.height}m</span>
            </div>
            <div className={styles.abilities}>
              <h3>Habilidades</h3>
              <ul>
                {pokemon.abilities && pokemon.abilities.map((abilitie) => (
                  <li>{abilitie.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.weakness}>
              <h3>Fraqueza</h3>
              <ul>
                {weakness && weakness.damage_relations.double_damage_from.map((resp) => (
                  <li>{resp.name}</li>
                ))}
              </ul>
            </div>
            <div className={styles.estatisticasButton}>
              <button onClick={toggle}>
                {buttonStats ? (
                  <span>Fecha estatísticas</span>
                ):(
                  <span>Ver estatísticas</span>
                )}
                <img src={IconeGrafico} alt="icone grafico" />
                </button>
            </div>
          </div>
        </div>
        {buttonStats && (
                  <ul className={`${styles.stats} ${styles.animeBottom} `}>
                    {buttonStats && pokemon.stats.map((stat) => (
                      <li key={stat.stat.name}>
                        <p className={`${styles.statsName}`}>
                          {stat.stat.name}
                        </p>
                        <div className={styles.progress}>
                          <div className={styles.progressWidth} style={{width:`${stat.base_stat}%`, background:`${color}`}}></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
        <div className={styles.containerVoltar}>
          <button onClick={() => window.location.reload()} className={styles.voltar}><img src={SetaVoltar} alt="Seta de Voltar" />  <span>Voltar Página anterior</span></button>
        </div>
      </section>
  )
}

export default CardPokemon