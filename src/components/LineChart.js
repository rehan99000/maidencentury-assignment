import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        }
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Sales',
            data: [1300, 1500, 1100, 1324, 1200, 1500, 1400, 1400, 1300, 1500, 1100, 1324, 1200, 1500, 900, 1400],
            borderColor: '#5631C1',
            backgroundColor: '#B9ABF799',
            fill: 'origin'
        },
    ],
};

const LineChart = () => {
    return (
        <Line options={options} data={data} />
    );
}

export default LineChart;
