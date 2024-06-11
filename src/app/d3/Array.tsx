import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useTheme } from "@mui/material/styles";

interface Props {
	data: number[];
}

export default function Array({ data }: Props) {
	const theme = useTheme();
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (svgRef.current) {
			const svg = d3.select(svgRef.current);
			const height = 80;
			const cellSize = 45;
			const width = data.length * cellSize + 5;

			svg.attr("width", width)
				.attr("height", height)
				.style("background-color", theme.palette.primary.main);

			svg.selectAll("*").remove();

			const g = svg.append("g");
			g.attr("transform", `translate(${3}, 0)`); // Slight width increase ensures left and right borders are shown

			// Draws rectangles/cells
			g.selectAll("rect")
				.data(data)
				.enter()
				.append("rect")
				.attr("x", (_, i) => i * cellSize)
				.attr("y", 30)
				.attr("width", cellSize)
				.attr("height", cellSize)
				.attr("fill", theme.palette.background.default)
				.attr("stroke-width", 2)
				.attr("stroke", theme.palette.text.primary);

			// Draws data
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
				.attr("font-size", "20px")
				.attr("font-family", "monospace")
				.text((d) => d);

			// Draws indexes
			g.selectAll("text.index")
				.data(data)
				.enter()
				.append("text")
				.attr("class", "index")
				.attr("x", (_, i) => i * cellSize + cellSize / 2)
				.attr("y", 10)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", "14px")
				.attr("font-family", "monospace")
				.attr("fill", theme.palette.text.primary)
				.text((_, i) => i);
		}
	}, [
		data,
		theme.palette.background.default,
		theme.palette.primary.main,
		theme.palette.text.primary,
		theme.palette.text.secondary,
	]);

	return <svg ref={svgRef}></svg>;
}
