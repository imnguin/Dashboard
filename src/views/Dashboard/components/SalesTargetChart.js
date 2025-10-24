import React from 'react';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return '';
    return amount.toLocaleString('vi-VN');
};

const SalesTargetChart = (props) => {
    const {
        title = '',
        labels = ['2012', '2013', '2014', '2015', '2016', '2017'],
        dataTarget = [500, 500, 500, 500, 500, 500],
        dataSales = [450, 480, 550, 520, 580, 400],
        commonBorderConfig = {
            borderColor: 'white',
            borderWidth: {
                top: 2,
                right: 0,
                bottom: 2,
                left: 0
            },
        },
        backgroundColor1 = 'rgba(255, 140, 0, 0.3)',
        backgroundColor2 = 'rgb(255, 140, 0)',
    } = props;

    const dataRemainingTarget = dataSales.map((sales, index) => {
        const target = dataTarget[index];
        return Math.max(0, target - sales);
    });

    const data = {
        labels,
        datasets: [
            {
                label: 'Doanh thu đã đạt',
                data: dataSales,
                backgroundColor: backgroundColor1,
                stack: 'stack1',
                borderRadius: 0,
                ...commonBorderConfig,
            },
            {
                label: 'Target còn lại',
                data: dataRemainingTarget,
                backgroundColor: backgroundColor2,
                stack: 'stack1',
                borderRadius: {
                    topLeft: 5,
                    topRight: 5,
                    bottomLeft: 0,
                    bottomRight: 0
                },
                ...commonBorderConfig,
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: false },
            legend: {
                display: true,
                position: 'top',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                }
            },
            datalabels: { display: false },
            tooltip: {
                callbacks: {
                    title: (context) => context[0].label,
                    label: (context) => {
                        const datasetIndex = context.datasetIndex;
                        const value = context.parsed.y;
                        const label = datasetIndex === 0 ? 'Doanh thu đã đạt' : 'Target còn lại';
                        return `${label}: ${formatCurrency(value)}tr`;
                    },
                    footer: (context) => {
                        const index = context[0].dataIndex;
                        const totalSales = dataSales[index];
                        const totalTarget = dataTarget[index];
                        const targetAchievedPercentage = ((totalSales / totalTarget) * 100).toFixed(0);
                        return [
                            `Tổng Target: ${formatCurrency(totalTarget)}tr`,
                            `Tỷ lệ đạt: ${targetAchievedPercentage}%`
                        ];
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: { display: false },
                border: { display: false },
                ticks: {
                    color: '#333'
                }
            },
            y: {
                stacked: true,
                beginAtZero: true,
                grid: { display: false },
                ticks: { display: false },
                border: { display: false }
            }
        },
        elements: {
            bar: {
                barPercentage: 0.25, 
                categoryPercentage: 0.8
            }
        }
    };

    const totalRevenue = 1112235264;

    return (
        <div
            style={{
                minHeight: 300,
                width: '100%',
                position: 'relative',
                backgroundColor: 'white',
                padding: '30px',
                fontFamily: 'Arial, sans-serif',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ position: 'relative', marginBottom: '20px' }}>
                <p style={{ marginBottom: 5, fontSize: '1em', color: '#666', fontWeight: 'bold' }}>
                    {title}
                </p>
                <h2 style={{ margin: 0, fontSize: '2em', fontWeight: 'bold' }}>
                    ${formatCurrency(totalRevenue)}
                </h2>
                <div style={{ fontSize: '0.9em', color: '#666', marginTop: '5px' }}>
                    Năm ngoái vs <span style={{ color: '#28a745', fontWeight: 'bold' }}>↑ 1.5%</span>
                </div>
            </div>

            <div style={{ flexGrow: 1 }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default SalesTargetChart;