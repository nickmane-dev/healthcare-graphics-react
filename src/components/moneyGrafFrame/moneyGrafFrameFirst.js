import './moneyGrafFrame.scss';


import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
      "name": "1 July",
      "max": 100000,
      "month": 49000,
    },
    {
      "name": "8 July",
      "month": 78000,
    },
    {
      "name": "16 July",
      "month": 35000,
    },
    {
      "name": "24 July",
      "month": 62000,
    },
    {
      "name": "31 July",
      "month": 42000,
    },
  ]
export default class SmallGraphB extends PureComponent {
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
            <Line type="monotone" dataKey="month" stroke="#336CFB" dot={<CustomizedDot />} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

// function CustomToolTip({active, payload}){
//   if(active){
//     return(
//       <div className='toolTip'>
//           <p className='toolText'>{payload[0].value}</p>
//       </div>
//     )
//   }
//   return null;
// }

// content={<CustomToolTip />}
function CustomizedDot(props) {
  const { cx, cy, stroke, payload, value } = props;
  return (
    <svg x={cx-150} y={cy-75}  fill='#A9C1FD' >
      <circle r="6"  cx="150" cy="75"  stroke="#FFF" strokeWidth="3" fill={'#A9C1FD'} />
    </svg>
  );
};
