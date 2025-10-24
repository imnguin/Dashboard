import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const WavySparkChart = ({ data, trend, lineColor, fillColor }) => {
    const defaultLineColor = trend === 'down' ? '#FF4D4F' : '#52C41A';
    const defaultFillColor = trend === 'down' ? 'rgba(255, 77, 79, 0.1)' : 'rgba(82, 196, 26, 0.1)';

    const chartData = {
        labels: data.map((_, i) => ''),
        datasets: [
            {
                data: data,
                borderColor: lineColor || defaultLineColor,
                borderWidth: 4,
                pointRadius: 0,
                tension: 0.4,
                fill: true, 
                backgroundColor: fillColor || defaultFillColor,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: { display: false },
        },
        layout: {
            padding: 0,
        },
    };

    return (
        <div style={{ height: '80px', marginLeft : -15}}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default WavySparkChart;