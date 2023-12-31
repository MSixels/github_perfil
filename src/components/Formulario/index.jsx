import { useState, useEffect } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value
        })
    }

    useEffect (() => {

    });

    const rederizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado!</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota da matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota da matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota da matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {rederizaResultado()}
        </form>
    )
}

export default Formulario