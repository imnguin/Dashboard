import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const StarRatingChartD3 = (props) => {
    const svgRef = useRef();
    const tooltipRef = useRef();

    const rawData = props.data || [];

    const baseSize = 500;
    const width = baseSize;
    const height = baseSize;

    const leaderLineLength = 50;
    const labelTextPadding = 15;

    const maxOuterRadius = (baseSize / 2) - leaderLineLength - labelTextPadding;
    const innerRadius = 50;
    const minOuterRadius = 140;

    const labelFontSize = "20px";

    const sliceStrokeWidth = 1;

    if (!rawData || rawData.length === 0) {
        return (
            <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                Vui lòng truyền dữ liệu (data) hợp lệ cho biểu đồ.
            </div>
        );
    }

    const data = rawData.sort((a, b) => b.value - a.value);

    const totalValue = d3.sum(data, d => d.value);
    const minValue = d3.min(data, d => d.value) || 0;
    const maxValue = d3.max(data, d => d.value) || 1;

    const radiusScale = d3.scaleSqrt()
        .domain([minValue, maxValue])
        .range([minOuterRadius, maxOuterRadius]);

    function midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    function calculateLabelCentroid(d, radius) {
        const tempArc = d3.arc()
            .innerRadius(radius)
            .outerRadius(radius);
        return tempArc.centroid(d);
    }

    const drawChart = () => {
        const svg = d3.select(svgRef.current)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet");

        svg.selectAll('*').remove();

        const g = svg.append("g")
            .attr("transform", `translate(${baseSize / 2}, ${baseSize / 2})`);

        const pie = d3.pie()
            .value(d => d.value)
            .sort(null)
            .startAngle(0)
            .endAngle(2 * Math.PI);

        const pieData = pie(data);

        const getArcGenerator = (modifierFactor) => d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(d => radiusScale(d.data.value) * modifierFactor)
            .padAngle(0.04)
            .cornerRadius(10);

        const customArcGenerator = getArcGenerator(1.0);
        const hoverArcGenerator = getArcGenerator(1.05);

        const showTooltip = (event, d) => {
            const tooltipDiv = d3.select(tooltipRef.current);
            const percentage = (d.data.value / totalValue * 100).toFixed(1);

            tooltipDiv.html(`
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${d.data.color}; margin-right: 8px;"></span>
                    <span style="font-weight: 600; color: #333;">${d.data.label}</span>
                </div>
                <div style="padding-left: 18px; font-size: 13px;">
                    <div>Giá trị: <span style="font-weight: 600;">${d.data.value}</span></div>
                    <div>Tỷ lệ: <span style="font-weight: 600;">${percentage}%</span></div>
                </div>
            `)
                .style("left", `${event.clientX + 15}px`)
                .style("top", `${event.clientY + 15}px`)
                .style("opacity", 1);
        };

        const hideTooltip = () => {
            d3.select(tooltipRef.current).style("opacity", 0);
        };

        g.selectAll("path")
            .data(pieData)
            .enter()
            .append("path")
            .attr("d", customArcGenerator)
            .attr("fill", d => d.data.color)
            .attr("stroke", d => d3.color(d.data.color).darker(0.5))
            .attr("stroke-width", sliceStrokeWidth)
            .style("opacity", 0.9)
            .on("mouseover", function (event, d) {
                d3.select(this).transition().duration(150).attr("d", hoverArcGenerator).style("opacity", 1.0);
                g.selectAll(".label-group text").filter(ld => ld === d).style("font-size", "22px");
                showTooltip(event, d);
            })
            .on("mousemove", function (event, d) {
                d3.select(tooltipRef.current)
                    .style("left", `${event.clientX + 15}px`)
                    .style("top", `${event.clientY + 15}px`);
            })
            .on("mouseout", function (event, d) {
                d3.select(this).transition().duration(150).attr("d", customArcGenerator).style("opacity", 0.9);
                g.selectAll(".label-group text").filter(ld => ld === d).style("font-size", labelFontSize);
                hideTooltip();
            });

        const labelGroup = g.selectAll(".label-group")
            .data(pieData)
            .enter()
            .append("g")
            .attr("class", "label-group");

        labelGroup.append("text")
            .attr("transform", d => {
                const finalRadius = maxOuterRadius + leaderLineLength + labelTextPadding;
                const pos = calculateLabelCentroid(d, finalRadius);
                return `translate(${pos[0]}, ${pos[1]})`;
            })
            .attr("dy", ".35em")
            .style("font-size", labelFontSize)
            .style("text-anchor", d => {
                const angle = midAngle(d);
                const angleDeg = (angle * 180) / Math.PI;
                if (angleDeg > 90 && angleDeg < 270) {
                    return "end";
                }
                return "start";
            })
            .style("fill", d => d.data.color)
            .style("font-weight", "bold")
            .text(d => d.data.label);

    };

    useEffect(() => {
        drawChart();
    }, [data]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
            <svg ref={svgRef} style={{ width: '100%', height: '100%' }}></svg>

            <div
                ref={tooltipRef}
                style={{
                    position: 'fixed',
                    pointerEvents: 'none',
                    background: 'rgba(255, 255, 255, 0.98)',
                    border: '1px solid #ddd',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    color: '#333',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    lineHeight: '1.4',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    zIndex: 1000,
                    maxWidth: '180px'
                }}
            >
            </div>
        </div>
    );
};

export default StarRatingChartD3;