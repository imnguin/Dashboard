import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

// Định nghĩa các Props nhận vào và gán giá trị mặc định để tránh lỗi 'undefined'
const StackedBarChartD3 = ({
    data = [],
    colorMapProps = {},
    keysOrder = []
}) => {
    const svgRef = useRef();
    const tooltipRef = useRef();
    const containerRef = useRef(); 

    // Khai báo biến chính từ Props
    const rawData = data;
    const keys = keysOrder;
    const colorMap = colorMapProps;

    if (!rawData || rawData.length === 0 || keys.length === 0 || Object.keys(colorMap).length === 0) {
        return (
            <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                Không có dữ liệu hợp lệ để vẽ biểu đồ.
            </div>
        );
    }

    // Tạo scale màu dựa trên keysOrder và colorMap
    const baseColors = keys.map(key => colorMap[key]);
    const color = d3.scaleOrdinal().domain(keys).range(baseColors);

    // Thông số cố định
    const overlapPixel = 8;
    const minBarWidth = 15;
    const borderRadius = 5;

    // Kích thước và Margin cố định
    const margin = { top: 20, right: 100, bottom: 70, left: 60 }; 
    // ⭐ ĐIỀU CHỈNH 1: GIẢM KÍCH THƯỚC VIEWBOX (Gọn gàng hơn)
    const totalWidth = 600; 
    const totalHeight = 340; 
    
    const width = totalWidth - margin.left - margin.right; 
    const height = totalHeight - margin.top - margin.bottom;

    // BƯỚC 1: CHUẨN HÓA DỮ LIỆU
    const normalizedData = rawData.map(d => {
        const total = d.total;
        const normalized = { level: d.level, total: total };
        keys.forEach(key => {
            normalized[key] = total > 0 ? d[key] / total : 0;
        });
        return normalized;
    });

    const drawChart = () => {
        const svg = d3.select(svgRef.current)
            // Cập nhật VIEWBOX
            .attr("viewBox", `0 0 ${totalWidth} ${totalHeight}`) 
            // ⭐ ĐIỀU CHỈNH CHÍNH: KHÔI PHỤC GIỮ TỶ LỆ để KHÔNG BỊ BÓP MÉO
            .attr("preserveAspectRatio", "xMidYMid meet"); 

        svg.selectAll('*').remove();

        // 1. TẠO GRADIENT (Giữ nguyên)
        const defs = svg.append("defs");
        keys.forEach((key, i) => {
            const baseColor = colorMap[key];
            const lighterColor = d3.color(baseColor).brighter(0.5);
            const id = `gradient-${key.replace(/\s/g, '')}`;

            const gradient = defs.select(`#${id}`).empty()
                ? defs.append("linearGradient").attr("id", id)
                : defs.select(`#${id}`);

            gradient.attr("x1", "0%").attr("x2", "100%").attr("y1", "0%").attr("y2", "0%");

            gradient.selectAll("stop").remove();

            gradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", lighterColor);

            gradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", baseColor);
        });

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        const tooltip = d3.select(tooltipRef.current);

        // D3 Stack 
        const stack = d3.stack().keys(keys).order(d3.stackOrderNone).offset(d3.stackOffsetNone);
        const series = stack(normalizedData);

        // Scales (Giữ nguyên)
        const yScale = d3.scaleBand()
            .domain(normalizedData.map(d => d.level))
            .range([0, height])
            .paddingInner(0.3)
            .paddingOuter(0.3);

        const xScale = d3.scaleLinear()
            .domain([0, 1])
            .range([0, width]);

        const getBarMetrics = (d) => {
            const valueRatio = d[1] - d[0];
            let startX = xScale(d[0]);
            let segmentWidth = xScale(d[1]) - startX;
            let finalStartX = startX;
            let finalSegmentWidth = segmentWidth;

            if (finalSegmentWidth < minBarWidth && valueRatio > 0) {
                finalSegmentWidth = minBarWidth;
                if (finalStartX + finalSegmentWidth > width) {
                    finalStartX = width - finalSegmentWidth;
                }
            }
            const overlapAmount = d[0] > 0 ? overlapPixel : 0;
            finalStartX = finalStartX - overlapAmount;
            finalSegmentWidth = finalSegmentWidth + overlapAmount;

            return { x: finalStartX, width: finalSegmentWidth, value: valueRatio };
        };

        // Hàm Tooltip... (Giữ nguyên)
        const handleMouseOver = (event, d) => {
            const segmentKey = keys[series.findIndex(s => s.includes(d))];
            const originalData = rawData.find(r => r.level === d.data.level);
            const absoluteValue = originalData[segmentKey];
            const percent = d3.format(".1%")(d[1] - d[0]);

            const segmentColor = colorMap[segmentKey];

            tooltip
                .style("opacity", 1)
                .html(`
                    <div style="font-size: 14px; font-weight: bold; color: ${segmentColor}; margin-bottom: 4px; border-bottom: 2px solid ${segmentColor}; padding-bottom: 2px;">
                        ${d.data.level} - ${segmentKey}
                    </div>
                    <div style="font-size: 13px;">
                        Giá trị: <span style="font-weight: bold;">${absoluteValue}</span>
                    </div>
                    <div style="font-size: 13px;">
                        Tỷ lệ: <span style="font-weight: bold;">${percent}</span>
                    </div>
                `);

            d3.select(event.currentTarget)
                .style("filter", "brightness(1.1)");
        };

        const handleMouseMove = (event) => {
            if (!containerRef.current) return;
            const containerBounds = containerRef.current.getBoundingClientRect();

            const xPos = event.clientX - containerBounds.left;
            const yPos = event.clientY - containerBounds.top;

            tooltip
                .style("left", (xPos + 15) + "px")
                .style("top", (yPos - 35) + "px");
        };

        const handleMouseOut = (event) => {
            tooltip.style("opacity", 0);
            d3.select(event.currentTarget)
                .style("filter", "none");
        };


        // 3. Vẽ các Thanh (Giữ nguyên)
        const levelGroup = g.selectAll(".level-group")
            .data(series)
            .enter()
            .append("g")
            .attr("fill", d => `url(#gradient-${d.key.replace(/\s/g, '')})`);

        levelGroup.selectAll("rect")
            .data(d => d)
            .enter()
            .append("rect")
            .attr("x", d => getBarMetrics(d).x)
            .attr("y", d => yScale(d.data.level))
            .attr("height", yScale.bandwidth())
            .attr("width", d => getBarMetrics(d).width)
            .attr("rx", borderRadius)
            .attr("ry", borderRadius)
            .style("stroke", "white")
            .style("stroke-width", 1)
            .on("mouseover", handleMouseOver)
            .on("mousemove", handleMouseMove)
            .on("mouseout", handleMouseOut);

        // 4. Nhãn Giá trị trên Thanh 
        levelGroup.selectAll(".bar-label")
            .data(d => d)
            .enter()
            .append("text")
            .attr("class", "bar-label")
            .attr("x", d => {
                const metrics = getBarMetrics(d);
                return metrics.x + metrics.width / 2;
            })
            .attr("y", d => yScale(d.data.level) + yScale.bandwidth() / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", "middle")
            .style("font-size", "0.9em") 
            .style("fill", "white")
            .style("font-weight", "bold")
            .text(d => {
                const metrics = getBarMetrics(d);
                if (metrics.width > 20 && metrics.value > 0) {
                    const originalData = rawData.find(r => r.level === d.data.level);
                    const key = keys[series.findIndex(s => s.includes(d))];
                    if (!key) return '';
                    const absoluteValue = originalData[key];
                    return `${absoluteValue}`;
                }
                return '';
            });

        // 5. Nhãn Tổng 
        g.selectAll(".total-label")
            .data(rawData)
            .enter()
            .append("text")
            .attr("class", "total-label")
            .attr("x", width + 20)
            .attr("y", d => yScale(d.level) + yScale.bandwidth() / 2)
            .attr("dy", "0.35em")
            .style("font-size", "1.1em") 
            .style("font-weight", "bold")
            .style("fill", "#333")
            .text(d => d.total);

        // 6. Trục X (Giữ nguyên)
        const xAxis = d3.axisBottom(xScale)
            .tickValues([0, 0.5, 1])
            .tickFormat(d3.format(".0%"))
            .tickSize(0);

        g.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxis)
            .style("font-size", "1.1em")
            .select(".domain").remove();

        // 7. Trục Y (Giữ nguyên)
        g.append("g")
            .attr("class", "y-axis")
            .call(d3.axisLeft(yScale).tickSize(0).tickPadding(10))
            .style("font-size", "1em") // Giữ tương đối
            .style("font-weight", "bold")
            .select(".domain").remove();

        // 8. Chú thích (Legend)
        const legendKeysOrder = ['Đang trống', 'Đang thực hiện', 'Chờ thực hiện']; 

        const legend = g.append("g")
            .attr("class", "legend")
            .attr("transform", `translate(0, ${height + 40})`); 

        const legendItem = legend.selectAll(".legend-item")
            .data(legendKeysOrder)
            .enter()
            .append("g")
            .attr("class", "legend-item")
            .attr("transform", (d, i) => `translate(${i * 180}, 0)`);

        legendItem.append("rect")
            .attr("width", 18) 
            .attr("height", 18)
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("fill", d => colorMap[d]);

        legendItem.append("text")
            .attr("x", 24) 
            .attr("y", 9)
            .attr("dy", "0.35em")
            .style("font-size", "1.1em") 
            .style("fill", "#333")
            .text(d => d);

    };

    // Chạy lại chart khi props thay đổi
    useEffect(() => {
        if (data && data.length > 0) {
            drawChart();
        }
    }, [data, keysOrder, colorMapProps]);

    return (
        <div
            ref={containerRef}
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                position: 'relative',
                width: '100%', 
                // ⭐ ĐIỀU CHỈNH 2: GIẢM CHIỀU CAO CONTAINER
                height: '300px', 
            }}
        >
            <svg 
                ref={svgRef}
                style={{ width: '100%', height: '100%' }} 
            ></svg>
            <div
                ref={tooltipRef}
                style={{
                    position: 'absolute',
                    opacity: 0,
                    backgroundColor: 'white',
                    border: '1px solid #ddd',
                    padding: '10px',
                    borderRadius: '6px',
                    pointerEvents: 'none',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                    lineHeight: '1.4',
                    zIndex: 1000
                }}
            >
            </div>
        </div>
    );
};

export default StackedBarChartD3;