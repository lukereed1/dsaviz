import { useState } from "react";
import { generateRandomArray } from "../../../app/util/util";
import AlgoPageTemplate from "../AlgoPageTemplate";

export default function MergeSortPage() {
	const [data, setData] = useState<number[]>(generateRandomArray(20));

	return (
		<AlgoPageTemplate
			header={"Bubble Sort"}
			visualisation={undefined}
			controls={undefined}
			terminal={undefined}
			codeEditor={undefined}
		/>
	);
}
