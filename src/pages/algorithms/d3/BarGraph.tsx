import { useTheme } from "@mui/material";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

interface Props {
	data: number[] | undefined;
	indexComparison?: [number, number, number?];
	sortedIndices?: number[];
	showValues: boolean;
}

export default function BarGraph(props: Props) {
	const { data, indexComparison, sortedIndices, showValues } = props;
	const theme = useTheme();
	const svgRef = useRef<SVGSVGElement | null>(null);
	const [width, setWidth] = useState(750);
	useEffect(() => {
		const updateWidth = () => {
			if (svgRef.current) {
				const parentWidth = svgRef.current.parentElement?.clientWidth;
				setWidth(parentWidth! - 100 || 750);
			}
		};

		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, [data]);

	useEffect(() => {
		if (!svgRef.current || !data) return;

		const svg = d3.select(svgRef.current);
		const height = 300;
		const barWidth = data ? width / data.length : 0;

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(data) || 0])
			.range([0, height - 20]);

		svg.selectAll("*").remove(); // Clear previous content

		svg.attr("width", width).attr("height", height);

		svg.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * barWidth)
			.attr("y", (d) => height - yScale(d))
			.attr("width", barWidth - 2)
			.attr("height", (d) => yScale(d))
			.attr("fill", (d, i) => {
				if (indexComparison && indexComparison.includes(i)) {
					return "green";
				} else if (sortedIndices && sortedIndices.includes(i)) {
					return theme.palette.secondary.main;
				} else {
					return theme.palette.text.primary;
				}
			});

		if (showValues) {
			const n = data.length;
			svg.selectAll("text")
				.data(data)
				.enter()
				.append("text")
				.attr("x", (d, i) => i * barWidth + barWidth / 2)
				.attr("y", (d) => height - yScale(d) - 8)
				.attr("text-anchor", "middle")
				.attr("fill", theme.palette.text.primary)
				.attr("font-size", n < 25 ? 18 : n < 50 ? 14 : n < 75 ? 10 : 8)
				.text((d) => d);
		}
	}, [
		data,
		indexComparison,
		showValues,
		sortedIndices,
		theme.palette.background.default,
		theme.palette.secondary.main,
		theme.palette.success.main,
		theme.palette.text.primary,
		width,
	]);

	return <svg ref={svgRef}></svg>;
}
