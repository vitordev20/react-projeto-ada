import { useState } from "react"
import styles from './button.module.css'
export default function meuContador(){

    const[contador, setContador] = useState(0)


    function aumentar() {
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }

    if(contador > 5)  {
        return(
      <div>   
        <h1>Contador maior que 5</h1>
         <button onClick={aumentar}>aumentar</button>
         <button onClick={diminuir}>diminuir</button>
     </div>
        ) 
    }

    return(
        <div  className="container">
            <h1>Listas no React</h1>
         <h1>Meu Contador :{contador}</h1>
         <h3>{contador}</h3>
         <button className={styles.myBotton} onClick={aumentar}>aumentar</button>
         <button onClick={diminuir}>diminuir</button>
        </div>
    )
}