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

// Hàm này giữ nguyên, dùng để tách nhãn dài thành nhiều dòng
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

const ErrorImpactChart = (props) => {
    const {
        width = '100%',
        minHeight = 200,
        title = 'Lỗi ảnh hưởng sao phục vụ',
        labels = ['T1. Tay nghề', 'T2. Thái độ phục vụ', 'T3. Trễ hẹn/chậm thời gian', 'T4. Quy trình', 'T5. Lỗi đặc biệt nghiêm trọng'],
        colors = ['#00BFFF', '#C71585', '#FF8C00', '#4169E1', '#DC143C'],
        chartData = [12000, 9000, 20500, 6500, 1000],
        isMobile = false, // 🌟 THÊM PROP NÀY ĐỂ XÁC ĐỊNH THIẾT BỊ
    } = props;

    // 🌟 ĐIỀU CHỈNH KÍCH THƯỚC FONT VÀ NHÃN DỰA TRÊN THIẾT BỊ
    const baseFontSize = isMobile ? 10 : 12;
    const titleFontSize = isMobile ? 18 : 22;
    const maxLabelLength = isMobile ? 8 : 10; // Giới hạn ký tự tối đa cho nhãn

    const data = {
        labels,
        datasets: [
            {
                label: 'Số lượng lỗi',
                data: chartData,
                backgroundColor: colors,
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
        maintainAspectRatio: false, // Quan trọng để điều chỉnh chiều cao
        plugins: {
            title: {
                display: true,
                text: title,
                align: 'start',
                font: {
                    size: titleFontSize, // Sử dụng font size động
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: isMobile ? 15 : 30 // Giảm padding trên mobile
                },
                color: 'black'
            },
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const originalLabel = context.label instanceof Array ? context.label.join(' ') : context.label;
                        return `${originalLabel}: ${context.parsed.y.toLocaleString()} lượt`;
                    }
                }
            },
            datalabels: { display: false }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: { size: baseFontSize }, // Sử dụng font size động
                    color: '#333',
                    callback: function (value, index, values) {
                        const label = this.getLabelForValue(value);
                        return splitLabel(label, maxLabelLength); // Sử dụng giới hạn ký tự động
                    }
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#e0e0e0'
                },
                ticks: {
                    callback: function (value) {
                        return value >= 1000 ? (value / 1000).toFixed(0) + 'k' : value;
                    },
                    font: { size: baseFontSize }, // Sử dụng font size động
                    color: '#333'
                }
            }
        }
    };

    return (
        <div
            style={{
                minHeight: minHeight, // minHeight được truyền từ component cha (đã responsive)
                width: width,
                position: 'relative',
                backgroundColor: 'white',
                padding: '10px 30px',
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