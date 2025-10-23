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

const PersonnelStackedChart = ({
    width = '800px',
    height = '500px',
    title = 'Nhân sự'
}) => {

    // Dữ liệu giả định
    const labels = ['LV1', 'LV2', 'LV3', 'LV4'];
    const dataOnHold = [55, 55, 75, 12];      // Đang trồng
    const dataPending = [650, 550, 25, 101];    // Đang chờ thực hiện
    const dataInProgress = [450, 42, 235, 59];  // Đang thực hiện

    // *** TÍNH TOÁN TỔNG SỐ LƯỢNG CHO MỖI LV ***
    const totalCounts = dataOnHold.map((val, i) =>
        val + dataPending[i] + dataInProgress[i]
    );
    // *****************************************

    const data = {
        labels,
        datasets: [
            {
                label: 'Đang trống',
                data: dataOnHold,
                backgroundColor: '#1cc88a',
                stack: 'Stack 0',
                borderWidth: 0,
                borderRadius: 5,
                barPercentage: 0.6,
                categoryPercentage: 0.8
            },
            {
                label: 'Đang chờ thực hiện',
                data: dataPending,
                backgroundColor: '#f6c23e',
                stack: 'Stack 0',
                // STYLE: Không bo góc, Border trắng
                borderWidth: 0,
                borderRadius: 5,
                barPercentage: 0.6,
                categoryPercentage: 0.8
            },
            {
                label: 'Đang thực hiện',
                data: dataInProgress,
                backgroundColor: '#4e73df',
                stack: 'Stack 0',
                borderWidth: 0,
                borderRadius: 5,
                barPercentage: 0.6,
                categoryPercentage: 0.8
            }
        ],
    };

    const options = {
        indexAxis: 'y', // Biểu đồ thanh ngang
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: title,
                align: 'start',
                font: {
                    size: 30,
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                },
                color : 'black'
            },
            legend: {
                display: true,
                position: 'bottom',
                align: 'center',
                labels: {
                    usePointStyle: true,
                    padding: 20
                }
            },
            datalabels: { display: false },
            tooltip: {
                mode: 'index',
                intersect: false,
                // *** HIỂN THỊ TỔNG SỐ LƯỢNG TRONG TOOLTIP ***
                callbacks: {
                    footer: (tooltipItems) => {
                        // Lấy index của thanh đang hover
                        const dataIndex = tooltipItems[0].dataIndex;
                        // Lấy giá trị tổng đã tính toán
                        const total = totalCounts[dataIndex];
                        // Định dạng và trả về chuỗi footer
                        return `Tổng cộng: ${total.toLocaleString('vi-VN')}`;
                    }
                }
                // ***************************************
            },
        },
        scales: {
            x: {
                stacked: true, // Xếp chồng theo trục X (giá trị)
                grid: {
                    display: true,
                    drawBorder: false,
                    color: '#e0e0e0',
                },
                ticks: {
                    font: { size: 12 },
                    color: '#333',
                },
                title: { display: false }
            },
            y: {
                stacked: true, // Xếp chồng theo trục Y (danh mục)
                grid: {
                    display: false // Ẩn lưới trục Y
                },
                ticks: {
                    font: { size: 14, weight: 'bold' },
                    color: '#333'
                }
            }
        }
    };

    return (
        <div
            style={{
                height: '350px',
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                padding: '0px 10px'
            }}
        >
            <div style={{ flexGrow: 1, position: 'relative' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default PersonnelStackedChart;