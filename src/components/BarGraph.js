import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import companies from '../data/deliveryCompanies.json';

function BarGraph() {
    const data = [];
    let c = 0;
    let r = 500

    companies.map((com) => {
        if (c < 5) {
            data.push({ name: com.Name, uv: r, pv: 2400, amt: 2400 })
        }
        r -= 100;
        c++;
    });

    return (
        <BarChart className="mb-4" width={600} height={300} data={data} >
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
    )
}

export default BarGraph