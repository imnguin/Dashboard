import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const StarRatingChart = (props) => {
    const {
        chartData = [12, 10, 15, 25, 30, 8],
        labels = ['1 Sao', '2 Sao', '3 Sao', '4 Sao', '5 Sao', 'Không đánh giá'],
        colors = ['#FF6347', '#FFD700', '#00BFFF', '#20B2AA', '#0000FF', '#3CB371'],
        options
    } = props;

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

    const optionsDefault = {
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
                    boxWidth: 10
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
                    }
                },
            },
            datalabels: { display: true },
        },
        animation: {
            animateRotate: true,
            animateScale: true,
        },
    };

    return (
        <div style={{ flexGrow: 1 }}>
            <Doughnut data={data} options={options || optionsDefault} />
        </div>
    );
};

export default StarRatingChart;