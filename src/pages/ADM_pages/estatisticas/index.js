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


    async function GetAllPedidos() {
        let d = await axios.get('http://localhost:5000/pedidos');
        let JogoCount = 0
        let ItCount = 0
        let ConsoleCount = 0
        let FlipCount = 0
        
        listPed.map((item) => {
            console.log(item.Categoria);
            if (item.Categoria === 'Fliperama')
                FlipCount += 1

            console.log('Fliperamas', FlipCount);
            setQtdFliperamas(FlipCount);

            if (item.Categoria === 'Items Colecionaveis') {
                ItCount += 1

                console.log('coleitems', ItCount);
                setQtdColeItems(ItCount);
            }

            if (item.Categoria === 'Jogo') {
                JogoCount += 1

                console.log('Jogos', JogoCount);
                setQtdJogos(JogoCount);
            }

            if (item.Categoria === 'Console') {
                ConsoleCount += 1

                console.log('Consoles', ConsoleCount);
                setQtdConsoles(ConsoleCount);
            }
        });
    }


    const data = [
        {
            name: 'Consoles',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Jogos',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Fliperamas',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Items Colecionaveis',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    useEffect(() => {
        GetAllPedidos();
    }, [])

    return (<div className="ADM_Estatisticas">
        <AdmTopNavBar />
        <div className="s">
            <Adm_leftNavBar />
            <button onClick={GetAllPedidos}>
                teste
            </button>
            <div className="content">
                <span className="Title">
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
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>


    </div>
    );
}