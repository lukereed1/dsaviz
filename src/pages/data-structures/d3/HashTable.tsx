import { useTheme } from "@mui/material";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface Props {
	data: number[][];
}

export default function HashTable({ data }: Props) {
	const theme = useTheme();
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (svgRef.current) {
			const svg = d3.select(svgRef.current);
			const width = 750;
			const cellSize = 35;
			const height =
				d3.max(data.map((chain) => chain.length))! * cellSize + 150;

			svg.attr("width", width)
				.attr("height", height)
				.style("background-color", theme.palette.primary.main);

			svg.selectAll("*").remove();

			const g = svg.append("g");
			g.attr("transform", `translate(${35}, 12)`);

			data.forEach((chain, index) => {
				const rectX = index * 70;
				const rectY = 20;
				// Rectangles
				g.append("rect")
					.attr("x", rectX)
					.attr("y", rectY)
					.attr("width", cellSize)
					.attr("height", cellSize)
					.attr("fill", theme.palette.background.default)
					.attr("stroke-width", 1.5)
					.attr("stroke", theme.palette.text.primary);
				// Rect text
				g.append("text")
					.attr("x", rectX + cellSize / 2)
					.attr("y", rectY + cellSize / 2)
					.attr("text-anchor", "middle")
					.attr("dominant-baseline", "middle")
					.attr("fill", theme.palette.text.primary)
					.attr("font-size", "16px")

					.attr("font-family", "menlo")
					.text("H");
				// Indexes
				g.append("text")
					.attr("x", rectX + cellSize / 2)
					.attr("y", rectY + cellSize / 2 - 30)
					.attr("text-anchor", "middle")
					.attr("dominant-baseline", "middle")
					.attr("fill", theme.palette.text.primary)
					.attr("font-size", "12px")
					.attr("font-family", "monospace")
					.attr("font-family", "menlo")
					.text(index);

				// Chains/Nodes
				const circleX = rectX + 30;
				let circleY = rectY + 70;
				chain.forEach((value, chainIndex) => {
					g.append("circle")
						.attr("cx", circleX)
						.attr("cy", circleY)
						.attr("r", cellSize / 2)
						.attr("fill", theme.palette.background.default)
						.attr("stroke-width", 1.5)
						.attr("stroke", theme.palette.text.primary);

					// Node text
					g.append("text")
						.attr("x", circleX)
						.attr("y", circleY)
						.attr("text-anchor", "middle")
						.attr("dominant-baseline", "middle")
						.attr("fill", theme.palette.text.primary)
						.attr("font-size", "14px")
						.attr("font-family", "menlo")
						.text(value);

					if (chainIndex === 0) {
						g.append("line")
							.attr("x1", rectX + cellSize / 2)
							.attr("y1", rectY + cellSize)
							.attr("x2", circleX)
							.attr("y2", circleY - cellSize / 2)
							.attr("stroke", theme.palette.text.primary)
							.attr("stroke-width", 3);
					} else {
						g.append("line")
							.attr("x1", circleX)
							.attr("y1", circleY - 50 + cellSize / 2)
							.attr("x2", circleX)
							.attr("y2", circleY - cellSize / 2)
							.attr("stroke", theme.palette.text.primary)
							.attr("stroke-width", 3);
					}
					circleY += 50;
				});
			});
		}
	}, [
		data,
		theme.palette.background.default,
		theme.palette.primary.main,
		theme.palette.text.primary,
	]);

	return <svg ref={svgRef}></svg>;
}
