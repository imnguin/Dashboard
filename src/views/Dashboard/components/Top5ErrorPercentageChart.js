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
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Đăng ký các thành phần cần thiết
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

// DỮ LIỆU GIẢ ĐỊNH CHO 3 KHO (Tổng số lỗi)
// Trong thực tế, đây là tổng số lỗi từ 3 kho
const DUMMY_ERROR_DATA = [
    { type: 'Trễ hẹn', count: 1550 },
    { type: 'Tay nghề', count: 980 },
    { type: 'Quy trình', count: 650 },
    { type: 'Thái độ', count: 420 },
    { type: 'Nghiêm trọng', count: 80 },
    // Lỗi không hiển thị trong Top 5
    { type: 'T6. Vệ sinh', count: 50 },
    { type: 'T7. Trang phục', count: 30 },
];

// Hàm tính toán và chuẩn bị dữ liệu cho biểu đồ (Sắp xếp theo Count)
function prepareChartData(errorData) {
    // 1. Sắp xếp giảm dần theo Count và lấy Top 5
    const top5Data = errorData
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

    // 2. Chuẩn bị cấu trúc cho Chart.js (sắp xếp tăng dần cho biểu đồ ngang)
    return {
        labels: top5Data.map(item => item.type).reverse(),
        counts: top5Data.map(item => item.count).reverse()
    };
}

const preparedData = prepareChartData(DUMMY_ERROR_DATA);
const mainColor = '#5B7DFA'; // Màu đỏ nổi bật cho lỗi

const data = {
    labels: preparedData.labels,
    datasets: [
        {
            label: 'Tổng số Lỗi',
            data: preparedData.counts,
            backgroundColor: mainColor,
            borderRadius: 5,
            borderSkipped: false,
            barPercentage: 0.7,
            categoryPercentage: 0.9
        },
    ],
};

const options = {
    indexAxis: 'y', // Biểu đồ Thanh Ngang
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
        legend: { display: false },
        title: {
            display: false,
            // Cập nhật tiêu đề
            // text: 'Số lượng lỗi khiếu nại theo khu vực', 
            align: 'start',
            font: { size: 20, weight: 'bold' },
            padding: { top: 10, bottom: 20 },
            color: '#000000ff'
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    // Hiển thị giá trị số nguyên
                    return `${context.dataset.label}: ${context.parsed.x.toLocaleString()}`;
                }
            }
        },
        datalabels: { // Hiển thị giá trị số trên thanh
            display: true,
            anchor: 'end',
            align: 'right', // Đặt nhãn ở cuối thanh
            color: '#333',
            font: { size: 13, weight: 'bold' },
            formatter: function (value) {
                return value.toLocaleString(); // Định dạng số (ví dụ: 1,550)
            }
        }
    },

    layout: {
        padding: {
            right: 50 // Thêm không gian cho DataLabels
        }
    },

    scales: {
        x: {
            min: 0,
            // Tự động điều chỉnh max X-axis cho phù hợp với tổng số lớn nhất
            max: Math.ceil(Math.max(...preparedData.counts) / 500) * 500,
            grid: {
                color: '#e0e0e0',
                borderDash: [5, 5]
            },
            ticks: {
                // Không hiển thị dấu %
                callback: (value) => value.toLocaleString(),
                color: '#333',
                font: { size: 12 }
            },
            title: {
                display: false,
                text: 'Tổng Số Lỗi',
                color: '#666',
            },
            border: { display: false }
        },
        y: {
            grid: { display: false },
            ticks: {
                color: '#333',
                font: { size: 13, weight: 'bold' }
            },
        }
    },
};

const Top5ErrorCountChart = () => {
    return (
        <div
            style={{ flexGrow: 1 }}
        >
            <Bar data={data} options={options} />
        </div>

    );
};

export default Top5ErrorCountChart;