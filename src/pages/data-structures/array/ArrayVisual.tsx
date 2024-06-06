// import d3 from "d3";
// import { useEffect, useRef } from "react";

// interface Props {
// 	data: number[];
// }

// export default function ArrayVisual({ data }: Props) {
// 	const svgRef = useRef<SVGSVGElement | null>(null);

// 	useEffect(() => {
// 		if (svgRef.current) {
// 			const svg = d3.select(svgRef.current);
// 			const width = 600;
// 			const height = 100;
// 			// const margin = { top: 20, right: 20, bottom: 20, left: 20 };
// 			const cellSize = 50;

// 			svg.attr("width", width)
// 				.attr("height", height)
// 				.attr("background-color", "#FFFFFF");

// 			const g = svg.append("g");
// 		}
// 	});
// }

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

interface ArrayVisualizerProps {
	data: number[];
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ data }) => {
	const theme = useTheme();
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (svgRef.current) {
			const svg = d3.select(svgRef.current);
			const height = 80;
			const cellSize = 40;
			const width = data.length * cellSize;
			const borderWidth = 5;
			svg.attr("width", width)
				.attr("height", height)
				.style("background-color", theme.palette.background.default);

			svg.selectAll("*").remove();

			const g = svg.append("g");

			// Draws rectangles/cells

			g.selectAll("rect")
				.data(data)
				.enter()
				.append("rect")
				.attr("x", (_, i) => i * cellSize)
				.attr("y", 30)
				.attr("width", cellSize)
				.attr("height", cellSize)
				.attr("fill", theme.palette.primary.main)
				.attr("stroke-width", 0.2)
				.attr("stroke", theme.palette.text.secondary);

			g.selectAll("text.value")
				.data(data)
				.enter()
				.append("text")
				.attr("class", "value")
				.attr("x", (_, i) => i * cellSize + cellSize / 2)
				.attr("y", cellSize / 2 + 30)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("fill", theme.palette.text.primary)
				.attr("font-size", "24px")
				.text((d) => d);

			g.selectAll("text.index")
				.data(data)
				.enter()
				.append("text")
				.attr("class", "index")
				.attr("x", (_, i) => i * cellSize + cellSize / 2)
				.attr("y", 10)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("fill", theme.palette.text.primary)
				.text((_, i) => i);
		}
	}, [data]);

	return <svg ref={svgRef}></svg>;
};

export default ArrayVisualizer;
