import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Col, Row } from 'antd';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const currentSalesData = [120, 320, 250, 400, 450, 780, 500, 300, 550, 250, 600, 700];
const pastSalesData = [280, 350, 200, 350, 360, 300, 200, 350, 330, 300, 350, 400];

const targetData = labels.map(() => 350);

const data = {
    labels,
    datasets: [
        {
            label: 'Hiện tại',
            data: currentSalesData,
            borderColor: '#448AFF',
            backgroundColor: '#448AFF',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 4,

            pointBackgroundColor: '#448AFF',
            pointBorderColor: '#448AFF',
            pointHoverBorderColor: 'blue',
            pointHoverBackgroundColor: 'white',
        },
        {
            label: 'Quá khứ',
            data: pastSalesData,
            borderColor: '#FFC107',
            backgroundColor: '#FFC107',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: 4,

            pointBackgroundColor: '#FFC107',
            pointBorderColor: '#FFC107',
        },
        {
            label: 'Target',
            data: targetData,

            borderColor: '#FFC107',
            backgroundColor: 'transparent',
            borderDash: [5, 5],
            borderWidth: 1,
            pointRadius: 0,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            align: 'left',
            labels: {
                usePointStyle: true,
                padding: 20
            }
        },
        title: {
            display: false,
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
                title: (context) => context[0].label,
                label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += context.parsed.y + 'tr';
                    }
                    return label;
                },
                afterBody: (context) => {
                    const current = currentSalesData[context[0].dataIndex];
                    const target = targetData[context[0].dataIndex];
                    if (target > 0) {
                        const ratio = ((current / target) * 100).toFixed(0);
                        return `Tỷ lệ: ${ratio}%`;
                    }
                    return '';
                }
            }
        },
        datalabels: { display: false },
    },

    scales: {
        x: {
            grid: {
                display: true,
                color: '#e0e0e0',
                drawBorder: false,
            },
            ticks: {
                color: '#333',
                font: { size: 12 }
            },
        },
        y: {
            min: 0,
            max: 800,

            grid: {
                color: '#e0e0e0',
                borderDash: [5, 5], 
                drawOnChartArea: true,
                drawTicks: false,
            },

            ticks: {
                stepSize: 200,
                color: '#333',
                font: { size: 12 }
            },

            border: {
                display: false
            }
        }
    },
};

const formatCurrency = (amount) => {
    if (amount === null || amount === undefined) return '';
    return amount.toLocaleString('vi-VN');
};

const SalesTrendAndTargetChart = (props) => {
    const { } = props;
    return (
        <Row gutter={[10, 20]} style={{ padding: 15 }}>
            <Col span={24}>
                <Row gutter={[10, 10]} style={{ display: 'flex', alignItems: 'center' }}>
                    <Col xs={24} md={12}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{
                                fontSize: 22,
                                fontWeight: 'bold',
                                marginRight: 15
                            }}>
                                Doanh thu
                            </span>
                            <span style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: '#28a745'
                            }}>
                                ${formatCurrency(1112235241111)}
                            </span>
                        </div>
                    </Col>
                    <Col xs={24} md={12} style={{ textAlign: 'right' }}>
                        <span>Năm ngoái vs <span style={{ color: '#28a745', fontWeight: 'bold' }}>↑ 1.5%</span></span>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <div style={{ height: 320, position: 'relative' }}>
                    <Line data={data} options={options} />
                </div>
            </Col>
        </Row>
    );
};

export default SalesTrendAndTargetChart;