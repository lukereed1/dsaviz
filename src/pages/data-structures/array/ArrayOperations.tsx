import { Box } from "@mui/material";
import OperationButton from "../../../app/components/OperationButton";
import ValueTextInput from "../../../app/components/ValueTextInput";
import IndexTextInput from "../../../app/components/IndexTextInput";

interface Props {
	operation: string;
	value?: string;
	index?: string;
	setValue: (value: string) => void;
	setIndex?: (value: string) => void;
}

const boxStyles = {
	display: "flex",
	flexDirection: "column",
	padding: 2,
	marginTop: 0,
};

export default function ArrayOperations(props: Props) {
	const { operation } = props;

	switch (operation) {
		case "Append":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={props.setValue} />
					<OperationButton label="Append" />
				</Box>
			);
			break;
		case "Insert":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={props.setValue} />
					<IndexTextInput setIndex={props.setIndex!} />
					<OperationButton label="Insert" />
				</Box>
			);
			break;
		case "Pop":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={props.setValue} />
					<OperationButton label="Pop" />
				</Box>
			);
			break;
		case "Remove":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={props.setValue} />
					<IndexTextInput setIndex={props.setIndex!} />
					<OperationButton label="Remove" />
				</Box>
			);
			break;
		case "Search":
			return (
				<Box sx={boxStyles}>
					<ValueTextInput setValue={props.setValue} />
					<OperationButton label="Search" />
				</Box>
			);
	}
}
