import React from "react";

export default function Condicional(props) {
    return (
        <div>
            <h2>O numero é: {props.numero}</h2>

            {props.numero % 2 === 0 ? <span>Par</span> : <span>Impar</span> }

        </div>
    )
}