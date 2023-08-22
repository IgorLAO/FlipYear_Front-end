import { Link } from "react-router-dom"
import { useState } from "react"
import './index.scss'
import Cabecalho from "../../ui/components/cabecalho/cabecalho"

export default function TelaInicial(){

    return(
        <div className="pagina-inicial">
            <Cabecalho />
        </div>
    )
}