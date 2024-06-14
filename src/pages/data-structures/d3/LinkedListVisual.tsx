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
	setHighlightedIndex,
}: Props) {
	const theme = useTheme();
	const svgRef = useRef<SVGSVGElement | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const linkedListArray = data.toArray();

	useEffect(() => {
		if (svgRef.current) {
			const svg = d3.select(svgRef.current);
			const cellSize = 40;
			const dataLength = linkedListArray.length;
			const width = dataLength * cellSize + 10 * dataLength;
			const height = 263;

			svg.attr("width", width)
				.attr("height", height)

				.style("background-color", theme.palette.primary.main);

			svg.selectAll("*").remove();

			const g = svg.append("g");
			g.attr("transform", `translate(25, 65)`);

			let row = 1;
			let down = true;
			linkedListArray.forEach((value, index) => {
				const circleX = index * 50;
				const circleY = row === 1 ? 10 : row == 2 ? 70 : 130;

				// Circles
				g.append("circle")
					.attr("cx", circleX)
					.attr("cy", circleY)
					.attr("r", cellSize / 2)
					.attr("fill", theme.palette.background.default)
					.attr("stroke-width", 1.5)
					.attr("stroke", theme.palette.text.primary);

				// Index
				g.append("text")
					.attr("x", circleX)
					.attr("y", circleY - 35)
					.attr("text-anchor", "middle")
					.attr("dominant-baseline", "middle")
					.attr("font-size", "12px")
					.attr("font-family", "menlo")
					.attr("fill", theme.palette.text.primary)
					.text(index);

				// Values
				g.append("text")
					.attr("x", circleX)
					.attr("y", circleY)
					.attr("text-anchor", "middle")
					.attr("dominant-baseline", "middle")
					.attr("font-size", "20px")
					.attr("font-family", "menlo")
					.attr("fill", theme.palette.text.primary)
					.text(value);

				if (index === 0) {
					g.append("text")
						.attr("x", circleX)
						.attr("y", circleY + 35)
						.attr("text-anchor", "middle")
						.attr("dominant-baseline", "middle")
						.attr("font-size", "10px")
						.attr("font-family", "menlo")
						.attr("fill", theme.palette.text.primary)
						.text("head");
				} else if (index === dataLength - 1) {
					g.append("text")
						.attr("x", circleX)
						.attr("y", circleY + 35)
						.attr("text-anchor", "middle")
						.attr("dominant-baseline", "middle")
						.attr("font-size", "10px")
						.attr("font-family", "menlo")
						.attr("fill", theme.palette.text.primary)
						.text("tail");
				}

				if (row === 1) {
					row = 2;
					down = true;
				} else if (row === 2) {
					if (down) row = 3;
					else row = 1;
				} else {
					row = 2;
					down = false;
				}
			});
		}
	}, [
		linkedListArray.length,
		theme.palette.primary.main,
		data,
		linkedListArray,
		theme.palette.background.default,
		theme.palette.text.primary,
	]);

	return <svg ref={svgRef}></svg>;
}
