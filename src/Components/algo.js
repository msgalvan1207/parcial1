import { useEffect, useState } from "react";


function Algo(){

    const [cosa, setCosa] = useState("")

    useEffect(()=>{
        fetch(URL).then(response => response.json()).then(data=>setCosa(data))
    },[]) //Ejecuta la primera vez que renderiza la pagina

    return (
        <h1>Cosa link</h1>
    )
}

export default Algo;