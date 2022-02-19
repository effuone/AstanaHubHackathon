import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Graph() {
    const data = [{ name: 'Акмолинская', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Актюбинская', uv: 600, pv: 2400, amt: 2400 }, { name: 'Алматинская', uv: 850, pv: 2400, amt: 2400 }, { name: 'Жамбылская', uv: 300, pv: 2400, amt: 2400 }];
    return (
        <div>
            <h6 className='mt-2 mb-4'>Популярность в областях</h6>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    )
}

export default Graph