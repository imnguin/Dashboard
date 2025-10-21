import React from 'react';

const LogisticsIcon = ({ size = 24, color = '#FFFFFF', backgroundColor = '#595959' }) => {
    // Kích thước của SVG sẽ dựa vào prop 'size'
    const viewBoxSize = 100; // Giá trị gốc của viewBox để dễ dàng tính toán các tọa độ bên trong

    // Các tọa độ cho hình người cách điệu (dựa trên các ô vuông)
    // Đây là một cách đơn giản để mô phỏng hình người bằng các rect
    // Bạn có thể tinh chỉnh các tọa độ này để khớp chính xác hơn
    const personRects = [
        // Đầu (hình tròn)
        { cx: 50, cy: 30, r: 8, fill: color },

        // Thân
        { x: 45, y: 40, width: 10, height: 10, fill: color },
        { x: 40, y: 50, width: 10, height: 10, fill: color },
        { x: 50, y: 50, width: 10, height: 10, fill: color },

        // Cánh tay trái
        { x: 30, y: 50, width: 10, height: 10, fill: color },
        { x: 25, y: 40, width: 10, height: 10, fill: color },

        // Cánh tay phải
        { x: 60, y: 50, width: 10, height: 10, fill: color },
        { x: 65, y: 40, width: 10, height: 10, fill: color },

        // Chân trái
        { x: 40, y: 60, width: 10, height: 10, fill: color },
        { x: 35, y: 70, width: 10, height: 10, fill: color },

        // Chân phải
        { x: 50, y: 60, width: 10, height: 10, fill: color },
        { x: 55, y: 70, width: 10, height: 10, fill: color },
    ];

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            fill="none" // Mặc định không có fill cho SVG tổng thể
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Hình tròn nền */}
            <circle cx={viewBoxSize / 2} cy={viewBoxSize / 2} r={viewBoxSize / 2 - 5} fill={backgroundColor} />

            {/* Hình người cách điệu bằng các ô vuông */}
            {/* Đây là một cách đơn giản để mô phỏng logo. 
                Để đạt được hình người từ các pixel như ảnh gốc, cần nhiều rect hơn.
                Tôi sẽ dùng các rect và một circle cho đầu để dễ hình dung hơn.
                Sau đó bạn có thể tinh chỉnh các tọa độ và kích thước.
            */}
            {/* Đầu */}
            <circle cx="50" cy="35" r="8" fill={color} />

            {/* Thân và Chân (mô phỏng theo dạng chạy) */}
            <rect x="45" y="45" width="10" height="10" fill={color} /> {/* Thân trên */}
            <rect x="40" y="55" width="10" height="10" fill={color} /> {/* Thân giữa trái */}
            <rect x="50" y="55" width="10" height="10" fill={color} /> {/* Thân giữa phải */}
            <rect x="35" y="65" width="10" height="10" fill={color} /> {/* Chân trái trên */}
            <rect x="40" y="75" width="10" height="10" fill={color} /> {/* Chân trái dưới */}
            <rect x="55" y="65" width="10" height="10" fill={color} /> {/* Chân phải trên */}
            <rect x="60" y="75" width="10" height="10" fill={color} /> {/* Chân phải dưới */}

            {/* Tay (mô phỏng theo dạng chạy) */}
            <rect x="35" y="45" width="10" height="10" fill={color} /> {/* Tay trái trên */}
            <rect x="30" y="55" width="10" height="10" fill={color} /> {/* Tay trái dưới */}
            <rect x="65" y="45" width="10" height="10" fill={color} /> {/* Tay phải trên */}
            <rect x="70" y="55" width="10" height="10" fill={color} /> {/* Tay phải dưới */}

        </svg>
    );
};

export default LogisticsIcon;