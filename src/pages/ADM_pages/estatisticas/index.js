import "./style.scss";

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import Adm_leftNavBar from "../../../ui/components/ADM_components/left_navbar";
import AdmTopNavBar from "../../../ui/components/ADM_components/topNavBar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export default function Estatisticas() {
    const [listPed, setListPed] = useState([]);
    const [QtdJogos, setQtdJogos] = useState(0);
    const [QtdConsoles, setQtdConsoles] = useState(0);
    const [QtdFliperamas, setQtdFliperamas] = useState(0);
    const [QtdColeItems, setQtdColeItems] = useState(0);

    const [Start, setStart] = useState(0);
    const [End, setEnd] = useState(0);


    async function GetAllPedidos() {
        let intervals = {
            Start: Start,
            End: End,
        }

        let d = await axios.get('http://localhost:5000/pedidosInterval', Start, End );

        console.log(d, intervals);
        
        setListPed(d.data)
        let JogoCount = 0
        let ItCount = 0
        let ConsoleCount = 0
        let FlipCount = 0


        listPed.map((item) => {

            console.log(item.Categoria);
            if (item.Categoria === 'Fliperama')
                FlipCount += 1

            setQtdFliperamas(FlipCount);

            if (item.Categoria === 'Items Colecionaveis') {
                ItCount += 1

                setQtdColeItems(ItCount);
            }

            if (item.Categoria === 'Jogo') {
                JogoCount += 1

                setQtdJogos(JogoCount);
            }

            if (item.Categoria === 'Console') {
                ConsoleCount += 1

                setQtdConsoles(ConsoleCount);
            }
        });
    }


    const data = [
        {
            name: 'Consoles',
            Vendas: QtdConsoles,
            amt: 2000,
        },
        {
            name: 'Jogos',
            Vendas: QtdJogos,
            amt: 2210,
        },
        {
            name: 'Fliperamas',
            Vendas: QtdFliperamas,
            amt: 2290,
        },
        {
            name: 'Items Colecionaveis',
            Vendas: QtdColeItems,
            amt: 2000,
        },
    ];




    return (
        <div className="ADM_Estatisticas">
            <AdmTopNavBar />

            <section >

                <div className="s">
                    <Adm_leftNavBar />
                    <div className="content">
                        <div className="dataRange">
                            <div>
                                <span>
                                    <a>Intervalo</a>

                                </span>

                                <span>
                                    <a>Começo: </a>
                                    <input type="date" onChange={e => {setStart(e.target.value); console.log(Start)}} />

                                </span>

                                <span>
                                    <a>Final:</a>
                                    <input type="date" onChange={(e) => {setEnd(e.target.value); console.log(End)}} />

                                </span>
                            </div>
                            <button onClick={GetAllPedidos}> Aplicar </button>
                        </div>
                        <span className="Title" style={{ marginBottom: '50px' }}>
                            <h1> Estatisticas </h1>
                        </span>

                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={300}
                                height={200}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="Vendas" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>
        </div>
    );
}