import { useTheme } from "@mui/material";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

interface Props {
	data: number[] | undefined;
}

export default function BarGraph({ data }: Props) {
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
			.range([0, height]);

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
			.attr("fill", theme.palette.text.primary);
		// .attr("stroke-width", 0.1)
		// .attr("stroke", theme.palette.text.primary);
	}, [
		data,
		theme.palette.background.default,
		theme.palette.text.primary,
		width,
	]);

	return <svg ref={svgRef}></svg>;
}
