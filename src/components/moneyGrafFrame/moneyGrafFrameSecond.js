import './moneyGrafFrame.scss';


import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
   {
      "name": "25 July",
      "max": 100000,
      "month": 62000,
    },
    {
      "name": "26 July",
      "month": 37000,
    },
    {
      "name": "27 July",
      "month": 59000,
    },
    {
      "name": "28 July",
      "month": 41000,
    },
    {
      "name": "29 July",
      "month": 78000,
    },
    {
      "name": "30 July",
      "month": 19000,
    },
    {
      "name": "31 July",
      "month": 55000,
    },
  ]
export default class SmallGraphY extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-different-shapes-z94k6';
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width="100%" height="100%" data={data}
            margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>

            <CartesianGrid strokeDasharray="3 3" vertical = {false}/>

            <XAxis dataKey="name" />
            <YAxis dataKey="max" tickCount={6} axisLine={false} tickLine={false}
            tickFormatter={number => `$${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}/>
            
            <Tooltip />
            <Line type="monotone" dataKey="month" stroke="#FAC032" dot={<CustomizedDot />} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

// function CustomToolTip({active, payload}){
//   if(active){
//     return(
//       <div className='toolTip'>
//           <p className='toolTextY'>{payload[0].value}</p>
//       </div>
//     )
//   }
//   return null;
// }

function CustomizedDot(props) {
  const { cx, cy, stroke, payload, value } = props;
  return (
    <svg x={cx-150} y={cy-75}  fill='#FCDF98' >
      <circle r="6"  cx="150" cy="75"  stroke="#FFF" strokeWidth="3" fill={'#FCDF98'} />
    </svg>
  );
};