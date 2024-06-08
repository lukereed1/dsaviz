import { Box } from "@mui/material";
import OperationButton from "../../../app/components/OperationButton";
import ValueTextInput from "../../../app/components/ValueTextInput";
import IndexTextInput from "../../../app/components/IndexTextInput";
import VerticalTabs from "../../../app/components/VerticalTabs";

interface Props {
	value: number | undefined;
	index: number | undefined;
	array: number[];
	setValue: (value: number | undefined) => void;
	setIndex: (value: number | undefined) => void;
	setArray: (nums: number[]) => void;
}

export default function ArrayOperations(props: Props) {
	const { value, array, index, setValue, setIndex, setArray } = props;

	function handleAppend() {
		if (value === undefined || isNaN(value)) return;
		if (value < 0 || value > 999) return;
		setArray([...array, value!]);
	}

	function handlePop() {
		if (index === undefined) {
			// Removes last element
			console.log(array);
			setArray(array.slice(0, -1));
		} else {
			// Removes element at specific index
			array.splice(index, 1);
			setArray([...array]);
		}
	}

	const arrayOperations = [
		{
			label: "Append",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<OperationButton label="Append" operation={handleAppend} />
				</Box>
			),
		},
		{
			label: "Pop",
			inputs: (
				<Box sx={styles.box}>
					<IndexTextInput
						setIndex={setIndex}
						marginTop={0}
						defaultValue={-1}
					/>
					<OperationButton label="Pop" operation={handlePop} />
				</Box>
			),
		},
		{
			label: "Insert",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={setValue} />
					<IndexTextInput setIndex={setIndex} marginTop={2} />
					<OperationButton label="Insert" />
				</Box>
			),
		},
		{
			label: "Remove",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={props.setValue} />
					<OperationButton label="Remove" />
				</Box>
			),
		},
		{
			label: "Search",
			inputs: (
				<Box sx={styles.box}>
					<ValueTextInput setValue={props.setValue} />
					<OperationButton label="Search" />
				</Box>
			),
		},
	];

	return (
		<VerticalTabs
			setValue={setValue}
			setIndex={setIndex}
			operations={arrayOperations}></VerticalTabs>
	);
}

const styles = {
	box: {
		display: "flex",
		flexDirection: "column",
		padding: 2,
		marginTop: 0,
	},
};
