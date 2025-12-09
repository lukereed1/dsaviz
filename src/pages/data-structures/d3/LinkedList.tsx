import { useTheme } from "@mui/material";
import { LinkedList } from "../linked-list/linkedList";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Props {
	data: LinkedList;
	highlightIndex?: number | undefined;
	setHighlightIndex: (value: number | undefined) => void;
}

export default function LinkedListVisual({
	data,
	highlightIndex,
	setHighlightIndex,
}: Props) {
	const theme = useTheme();
	const svgRef = useRef<SVGSVGElement | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const linkedListArray = data.toArray();

	useEffect(() => {
		if (!svgRef.current) return;

		const svg = d3.select(svgRef.current);
		const cellSize = 50;
		const dataLength = linkedListArray.length;
		const width = dataLength * cellSize + 10 * dataLength;
		const height = 300;

		svg.attr("width", width)
			.attr("height", height)

			.style("background-color", theme.palette.primary.main);

		svg.selectAll("*").remove();

		const g = svg.append("g");
		g.attr("transform", `translate(30, 50)`);

		let row = 1;
		let down = true;
		let previousX = 0;
		let previousY = 10;
		const radius = cellSize / 2;
		linkedListArray.forEach((value, index) => {
			const circleX = index * 60;
			const circleY =
				row === 1 ? 10 : row == 2 ? 70 : row === 3 ? 130 : 180;

			// Circles
			g.append("circle")
				.attr("cx", circleX)
				.attr("cy", circleY)
				.attr("r", cellSize / 2)
				.attr(
					"fill",
					index === highlightIndex
						? theme.palette.secondary.main
						: theme.palette.background.default
				)
				.attr("stroke-width", 1.5)
				.attr("stroke", theme.palette.text.primary);

			// Index
			g.append("text")
				.attr("x", circleX)
				.attr("y", circleY + 40)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", "12px")
				   .attr("font-family", "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace")
				.attr("fill", theme.palette.text.primary)
				.text(index);

			// Values
			g.append("text")
				.attr("x", circleX)
				.attr("y", circleY)
				.attr("text-anchor", "middle")
				.attr("dominant-baseline", "middle")
				.attr("font-size", "20px")
				   .attr("font-family", "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace")
				.attr(
					"fill",
					index === highlightIndex
						? theme.palette.text.secondary
						: theme.palette.text.primary
				)
				.text(value);

			if (index === 0) {
				g.append("text")
					.attr("x", circleX)
					.attr("y", circleY - 40)
					.attr("text-anchor", "middle")
					.attr("dominant-baseline", "middle")
					.attr("font-size", "12")
					   .attr("font-family", "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace")
					.attr("fill", theme.palette.text.primary)
					.text("head");
			} else if (index === dataLength - 1) {
				g.append("text")
					.attr("x", circleX)
					.attr("y", circleY - 40)
					.attr("text-anchor", "middle")
					.attr("dominant-baseline", "middle")
					.attr("font-size", "12px")
					   .attr("font-family", "'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace")
					.attr("fill", theme.palette.text.primary)
					.text("tail");
			}

			// Arrowhead
			svg.append("defs")
				.append("marker")
				.attr("id", "arrowhead")
				.attr("viewBox", "0 0 10 10")
				.attr("refX", 12)
				.attr("refY", 5)
				.attr("markerWidth", 4)
				.attr("markerHeight", 4)
				.attr("orient", "auto")
				.append("path")
				.attr("d", "M 0 0 L 10 5 L 0 10 z")
				.attr("fill", theme.palette.text.primary);

			const angle = Math.atan2(circleY - previousY, circleX - previousX);
			// Linking lines
			if (index !== 0) {
				g.append("line")
					.attr("x1", previousX + radius * Math.cos(angle))
					.attr("y1", previousY + radius * Math.sin(angle))
					.attr("x2", circleX - radius * Math.cos(angle))
					.attr("y2", circleY - radius * Math.sin(angle))
					.attr("stroke", theme.palette.text.primary)
					.attr("stroke-width", 2)
					.attr("marker-end", "url(#arrowhead)");
			}
			previousX = circleX;
			previousY = circleY;

			if (row === 1) {
				row = 2;
				down = true;
			} else if (row === 2) {
				if (down) row = 3;
				else row = 1;
			} else if (row === 3) {
				if (down) row = 4;
				else row = 2;
			} else {
				row = 3;
				down = false;
			}
			if (timeoutRef.current) clearTimeout(timeoutRef.current);

			timeoutRef.current = setTimeout(
				() => setHighlightIndex(undefined),
				1000
			);
		});
	}, [
		linkedListArray.length,
		theme.palette.primary.main,
		data,
		linkedListArray,
		theme.palette.background.default,
		theme.palette.text.primary,
		setHighlightIndex,
		theme.palette.secondary.main,
		theme.palette.text.secondary,
		highlightIndex,
	]);

	return <svg ref={svgRef}></svg>;
}
