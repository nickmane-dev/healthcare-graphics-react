import './oneGrafFrame.scss';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '2020-1',
    "Patients 2020": 140,
    "Patients 2019": 50,
    pv: 400,
    amt: 200,
    max: 300
  },
  {
    name: '2020-2',
    "Patients 2020": 110,
    "Patients 2019": 70,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-3',
    "Patients 2020": 205,
    "Patients 2019": 115,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-4',
    "Patients 2020": 150,
    "Patients 2019": 100,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-5',
    "Patients 2020": 150,
    "Patients 2019": 155,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-6',
    "Patients 2020": 145,
    "Patients 2019": 110,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-7',
    "Patients 2020": 180,
    "Patients 2019": 125,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-8',
    "Patients 2020": 180,
    "Patients 2019": 130,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-9',
    "Patients 2020": 135,
    "Patients 2019": 170,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-10',
    "Patients 2020": 210,
    "Patients 2019": 105,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-11',
    "Patients 2020": 170,
    "Patients 2019": 110,
    pv: 400,
    amt: 200,
  },
  {
    name: '2020-12',
    "Patients 2020": 245,
    "Patients 2019": 180,
    pv: 400,
    amt: 200,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        
        <AreaChart
          width= "100%"
          height="100%"
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: -8,
            bottom: 0,
          }}
        >
            <defs>
                <linearGradient id="color" x1 = "0" y1 = "0" x2 = "0" y2 = "1">
                    <stop offset="0%" stopColor = "#336CFB" stopOpacity={0.4}/>
                    <stop offset="75%" stopColor = "#336CFB" stopOpacity={0.05}/>
                </linearGradient>
            </defs>
          <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
          <XAxis dataKey="name" />
          <YAxis dataKey="max" axisLine = {false} tickLine = {false} tickCount = {7}/>
          <Tooltip />
          
          <Area type="monotone" dataKey="Patients 2020" stroke="#336CFB" fill="url(#color)" />
          <Area type="monotone" dataKey="Patients 2019" stroke="#FAC032" fillOpacity={0}/>
          
        </AreaChart>
        
      </ResponsiveContainer>
    );
  }
}


// function CustopmTooltip({active, payload, label}){
//     if(active){
//         return(
//             <div className="tooltip">
//                 <h4>{label}</h4>
//             </div>
//         );
//     }
//     return null;

// }

