import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const RatingGroupedBarChart = (props) => {

    const {
        title,
        labels,
        chartData
    } = props;

    const data = {
        labels,
        datasets: Object.keys(chartData).map(key => ({
            label: key,
            data: chartData[key].data,
            backgroundColor: chartData[key].color,
            borderRadius: 5,
            borderSkipped: false,
        })),
    };


    const options = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    padding: 10,
                    boxWidth: 15,
                    font: { size: 14, weight: 'bold' }
                }
            },
            title: {
                display: true,
                text: title,
                align: 'start',
                font: { size: 20, weight: 'bold' },
                padding: { top: 0, bottom: 0 },
                color: '#000000ff'
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                   
                    title: function (context) {
                        return labels[context[0].dataIndex];
                    }
                }
            },
            datalabels: { display: false }
        },

        scales: {
            x: {
                offset: true,
                grid: { display: false },
                ticks: {
                    color: '#333',
                    font: { size: 12 },
                    callback: function (val, index) {
                        const originalLabel = labels[index];
                        const words = originalLabel.split(' ');

                        const maxWordsPerLine = 4;
                        const maxTotalWords = maxWordsPerLine * 2;

                        if (words.length > maxWordsPerLine) {
                            let line1 = words.slice(0, maxWordsPerLine).join(' ');
                            let line2 = words.slice(maxWordsPerLine, maxTotalWords).join(' ');

                            if (words.length > maxTotalWords) {
                                line2 += '...';
                            }

                            return [line1, line2];
                        } else {
                            return originalLabel;
                        }
                    }
                },
                categoryPercentage: 0.7, 
                barPercentage: 0.4,
            },
            y: {
                min: 0,
                max: 200,
                grid: { color: '#e0e0e0', borderDash: [5, 5] },
                ticks: { stepSize: 50, color: '#333', font: { size: 12 } },
                border: { display: false }
            }
        },
    };

    return (
        <div style={{ width: '100%', height: '400px', padding: 15 }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default RatingGroupedBarChart;