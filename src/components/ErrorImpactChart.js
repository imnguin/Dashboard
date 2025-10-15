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

// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// *** HÀM TIỆN ÍCH TỰ ĐỘNG CHIA CHUỖI NHÃN CHO TRỤC X ***
// Hàm này giúp nhãn tự động xuống dòng khi dữ liệu động quá dài.
function splitLabel(label, maxLineLength = 10) {
    if (label.length <= maxLineLength) {
        return label;
    }
    const words = label.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        if ((currentLine + ' ' + words[i]).length <= maxLineLength) {
            currentLine += ' ' + words[i];
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);
    return lines;
}

const ErrorImpactChart = ({ width = 700, height = 500, title = 'Lỗi ảnh hưởng sao phục vụ' }) => {

    // Dữ liệu giả định (Bạn nên truyền qua props trong thực tế)
    const labels = [
        'T1. Tay nghề',
        'T2. Thái độ phục vụ',
        'T3. Trễ hẹn/chậm thời gian',
        'T4. Quy trình',
        'T5. Lỗi đặc biệt nghiêm trọng'
    ];

    const errorCounts = [12000, 9000, 20500, 6500, 1000];

    const barColors = [
        '#00BFFF',
        '#C71585',
        '#FF8C00',
        '#4169E1',
        '#DC143C'
    ];

    const data = {
        labels,
        datasets: [
            {
                label: 'Số lượng lỗi',
                data: errorCounts,
                backgroundColor: barColors,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                barPercentage: 0.4,
                categoryPercentage: 0.8
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: title,
                align: 'start',
                font: {
                    size: 22,
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                color : 'black'
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        // Xử lý tooltip: Ghép các dòng bị chia lại thành một chuỗi
                        const originalLabel = context.label instanceof Array ? context.label.join(' ') : context.label;
                        return `${originalLabel}: ${context.parsed.y.toLocaleString()} lượt`;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: { size: 12 },
                    color: '#333',
                    // *** ÁP DỤNG CALLBACK TỰ ĐỘNG XUỐNG DÒNG ***
                    callback: function (value, index, values) {
                        const label = this.getLabelForValue(value);
                        // Giới hạn 10 ký tự/dòng. Bạn có thể thay đổi số 10 này.
                        return splitLabel(label, 10);
                    }
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#e0e0e0'
                },
                ticks: {
                    // Định dạng nhãn trục Y thành dạng "10k", "15k", ...
                    callback: function (value) {
                        return value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value;
                    },
                    font: { size: 12 },
                    color: '#333'
                }
            }
        }
    };

    return (
        <div
            style={{
                minHeight: 400,
                width: '100%',
                position: 'relative',
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 8px 8px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Bar data={data} options={options} />
        </div>
    );
};

export default ErrorImpactChart;