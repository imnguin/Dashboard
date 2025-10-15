import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const StarRatingChart = (props) => {
    const chartData = [12, 10, 15, 25, 30, 8];
    const labels = ['1 Sao', '2 Sao', '3 Sao', '4 Sao', '5 Sao', 'Không đánh giá'];
    const colors = [
        '#FF6347', // 1 Sao 
        '#FFD700', // 2 Sao
        '#00BFFF', // 3 Sao
        '#20B2AA', // 4 Sao
        '#0000FF', // 5 Sao
        '#3CB371'  // Không đánh giá
    ];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Đánh giá',
                data: chartData,
                backgroundColor: colors,
                borderColor: 'white',
                borderWidth: 5,
                borderRadius: 10,
                offset: [5, 5, 5, 5, 5, 5],
                hoverOffset: 25,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '30%',

        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 14,
                    },
                    boxWidth: 10,
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + '%';
                        }
                        return label;
                    },
                },
            },
        },
        animation: {
            animateRotate: true,
            animateScale: true,
        },
    };

    return (
        <div style={{ flexGrow: 1 }}>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default StarRatingChart;