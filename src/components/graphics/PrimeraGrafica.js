import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';

const data = [
  { name: "Validos", value: 400 },
  { name: "No validos", value: 300 }
];

const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

async function fetcher() {
  const settings = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ votos: 'devolver' }),
  };
  try {
    const fetchResponse = await fetch('https://us-central1-software2-360600.cloudfunctions.net/request-votos', settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
}
/*
const fetcher = (url) => fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ votos: 'devolver' }),
}).then((res) => res.json());
*/


const useValidos = async (url) => {
  const { data, error } = await useSWR(url, fetcher);
  return {
    validos: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default function PrimeraGrafica() {

  const [votos, setVotos] = useState([]);
  const [consulta, setConsulta] = useState('');

  //const { validos, isLoading, isError } = useValidos(address);

  const { data, error } = useSWR('https://us-central1-software2-360600.cloudfunctions.net/request-votos', fetcher)

  // console.log("error", error);
  // console.log(data);

  /*if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  */
  console.log(data);
  return <div>hello world!</div>
  /*
    return (
      <>
        <h1>Hola mundo</h1>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <h1>Adios mundo</h1>
      </>
    );*/
}