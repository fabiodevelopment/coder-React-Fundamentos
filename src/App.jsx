
import React from "react";

import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

import './App.css'
import Repeticao from "./components/Repeticao";

export default function App(props) {

    return (
        <div className="App">
    
            <Card titulo="#06 - Condicional Com If V2">
                <CondicionalComIf numero={9}></CondicionalComIf>
            </Card>
            
            <Card titulo="#05 - Condicional V1">
                <Condicional numero={10}></Condicional>
            </Card>

            <Card titulo="#04 - Repetição">
                <Repeticao></Repeticao>
            </Card>

    
            <Card titulo="#03 - Componentes Com Filhos">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Carlos</li>
                        <li>Bia</li>
                        <li>Rafael</li>
                    </ul>
                </ComFilhos>
            </Card>
    
            <Card titulo="#02 - Componente Com Parametro">
                <ComParametro titulo="Esse é o Título" subtitulo="Esse é o sub-Título" />
                <ComParametro titulo="Opa" subtitulo="Epa" />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />
            </Card>
            
        </div>
    )
} 