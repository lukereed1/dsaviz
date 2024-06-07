import { Box } from "@mui/material";
import OperationButton from "../../../app/components/OperationButton";
import ValueTextInput from "../../../app/components/ValueTextInput";
import IndexTextInput from "../../../app/components/IndexTextInput";

interface Props {
	operation: string;
	value?: number;
	index?: number;
	array: number[];
	setValue?: (value: number) => void;
	setIndex?: (value: number) => void;
	setArray: (nums: number[]) => void;
}

export default function ArrayOperations(props: Props) {
	const { operation, value, array, index, setValue, setIndex, setArray } =
		props;

	function handleAppend() {
		if (value === undefined || isNaN(value)) return;
		if (value < 0 || value > 999) return;
		setArray([...array, value!]);
	}

	function handlePop() {
		if (index === undefined) {
			// Removes last element
			setArray(array.slice(0, -1));
		} else {
			// Removes element at specific index
			array.splice(index, 1);
			setArray([...array]);
		}
	}

	switch (operation) {
		case "Append":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={setValue!} />
					<OperationButton label="Append" operation={handleAppend} />
				</Box>
			);
			break;
		case "Pop":
			return (
				<Box sx={boxStyles}>
					<IndexTextInput
						setIndex={setIndex!}
						marginTop={0}
						defaultValue={-1}
					/>
					<OperationButton label="Pop" operation={handlePop} />
				</Box>
			);
			break;
		case "Insert":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={setValue!} />
					<IndexTextInput setIndex={setIndex!} marginTop={2} />
					<OperationButton label="Insert" />
				</Box>
			);
			break;

		case "Remove":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={props.setValue!} />
					<OperationButton label="Remove" />
				</Box>
			);
			break;
		case "Search":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={props.setValue!} />
					<OperationButton label="Search" />
				</Box>
			);
	}
}

const boxStyles = {
	display: "flex",
	flexDirection: "column",
	padding: 2,
	marginTop: 0,
};
