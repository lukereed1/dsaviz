import { useState } from "react";
import AlgoPageTemplate from "../AlgoPageTemplate";
import BarGraph from "../d3/BarGraph";

export default function QuickSortPage() {
	const [data, setData] = useState<number[] | undefined>([
		100, 1, 3, 50, 74, 21, 100, 23, 1, 12, 12, 19, 150, 100, 100, 1, 3, 50,
		74, 21, 100, 23, 1, 12, 12, 19, 150, 100, 100, 1, 3, 50, 74, 21, 100,
		23, 1, 12, 12, 19, 150, 100, 100,
	]);
	return (
		<>
			<AlgoPageTemplate
				header={"Quick Sort"}
				visualisation={<BarGraph data={data} />}
				controls={undefined}
				terminal={undefined}
				codeEditor={undefined}></AlgoPageTemplate>
		</>
	);
}
