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

// Đăng ký các thành phần cần thiết
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Dữ liệu mẫu (giữ nguyên)
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov'];

const data = {
    labels,
    datasets: [
        {
            label: 'Hiện tại',
            data: [1.0, 2.0, 1.9, 2.1, 3.0, 4.0, 4.8, 4.0, 2.0, 2.8, 2.9],
            borderColor: '#448AFF',
            backgroundColor: '#448AFF',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: (context) => context.dataIndex === 6 ? 6 : 4,
            pointBackgroundColor: (context) => context.dataIndex === 6 ? '#448AFF' : '#fff',
            pointBorderColor: (context) => context.dataIndex === 6 ? '#448AFF' : '#448AFF',
            fill: false,
        },
        {
            label: 'Quá khứ',
            data: [2.5, 3.5, 1.2, 1.0, 4.5, 4.0, 2.5, 3.5, 4.5, 1.8, 4.0],
            borderColor: '#E53935',
            backgroundColor: '#E53935',
            tension: 0.4,
            borderWidth: 2,
            pointRadius: (context) => context.dataIndex === 9 ? 6 : 4,
            pointBackgroundColor: (context) => context.dataIndex === 9 ? '#E53935' : '#fff',
            pointBorderColor: (context) => context.dataIndex === 9 ? '#E53935' : '#E53935',
            fill: false,
        },
    ],
};

// Plugin mô phỏng đường tham chiếu đứng (giữ nguyên)
const verticalLinePlugin = {
    id: 'verticalLinePlugin',
    beforeDraw: (chart) => {
        const { ctx, chartArea, scales: { x, y } } = chart;
        ctx.save();
        ctx.setLineDash([5, 5]);
        ctx.strokeStyle = '#999999';

        ['Jul', 'Sept'].forEach(monthLabel => {
            const dataIndex = labels.indexOf(monthLabel);
            if (dataIndex !== -1) {
                const xPosition = x.getPixelForValue(dataIndex);
                ctx.beginPath();
                ctx.moveTo(xPosition, chartArea.top);
                ctx.lineTo(xPosition, chartArea.bottom);
                ctx.stroke();
            }
        });

        ctx.restore();
    }
};

const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            // align: 'end',
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                boxWidth: 8,
                padding: 30, // Khoảng cách giữa các mục chú thích
                font: { size: 14 }
            }
        },
        title: {
            display: true,
            text: 'Sao trung bình trong năm 2025 so với năm trước',
            align: 'start',
            font: { size: 20, weight: 'bold' },
            padding: { top: 10, bottom: 20 }, // <--- ĐIỀU CHỈNH: Tăng padding dưới Title
            color: '#000000ff'
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function (context) {
                    return `${context.dataset.label}: ${context.parsed.y.toFixed(2)} Sao`;
                }
            }
        },
        datalabels: { display: false },
    },

    layout: {
        padding: {
            top: 10, // <--- ĐIỀU CHỈNH: Tăng mạnh padding trên để đẩy khu vực vẽ xuống
            bottom: 20
        }
    },

    scales: {
        x: {
            grid: { display: false },
            ticks: {
                color: '#333',
                font: { size: 12 }
            },
            afterBuildTicks: (axis) => {
                axis.ticks = labels.map((label, index) => ({ value: index, label }));
            }
        },
        y: {
            min: 0,
            max: 5,
            grid: { color: '#e0e0e0', borderDash: [5, 5] },
            ticks: {
                stepSize: 1,
                color: '#333',
                font: { size: 12 },
                callback: function (value) {
                    return value > 0 ? `${value} Sao` : value;
                }
            },
            border: { display: false }
        }
    },
};

const AverageStarTrendChart = () => {
    return (
        <div
            style={{
                width: '100%',
                height: '450px',
                padding: '10px',
                // backgroundColor: 'white',
                // borderRadius: '10px',
                // boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
            }}
        >
            <Line
                data={data}
                options={options}
                plugins={[verticalLinePlugin]}
            />
        </div>
    );
};

export default AverageStarTrendChart;