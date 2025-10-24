import React from 'react';

const LogisticsIcon = ({ size = 24, color = '#FFFFFF', backgroundColor = '#595959' }) => {
    const viewBoxSize = 100;
    const personRects = [
        { cx: 50, cy: 30, r: 8, fill: color },

        { x: 45, y: 40, width: 10, height: 10, fill: color },
        { x: 40, y: 50, width: 10, height: 10, fill: color },
        { x: 50, y: 50, width: 10, height: 10, fill: color },

        { x: 30, y: 50, width: 10, height: 10, fill: color },
        { x: 25, y: 40, width: 10, height: 10, fill: color },

        { x: 60, y: 50, width: 10, height: 10, fill: color },
        { x: 65, y: 40, width: 10, height: 10, fill: color },

        { x: 40, y: 60, width: 10, height: 10, fill: color },
        { x: 35, y: 70, width: 10, height: 10, fill: color },

        { x: 50, y: 60, width: 10, height: 10, fill: color },
        { x: 55, y: 70, width: 10, height: 10, fill: color },
    ];

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx={viewBoxSize / 2} cy={viewBoxSize / 2} r={viewBoxSize / 2 - 5} fill={backgroundColor} />
            <circle cx="50" cy="35" r="8" fill={color} />
            <rect x="45" y="45" width="10" height="10" fill={color} />
            <rect x="40" y="55" width="10" height="10" fill={color} />
            <rect x="50" y="55" width="10" height="10" fill={color} />
            <rect x="35" y="65" width="10" height="10" fill={color} />
            <rect x="40" y="75" width="10" height="10" fill={color} />
            <rect x="55" y="65" width="10" height="10" fill={color} />
            <rect x="60" y="75" width="10" height="10" fill={color} />
            <rect x="35" y="45" width="10" height="10" fill={color} />
            <rect x="30" y="55" width="10" height="10" fill={color} />
            <rect x="65" y="45" width="10" height="10" fill={color} />
            <rect x="70" y="55" width="10" height="10" fill={color} />

        </svg>
    );
};

export default LogisticsIcon;