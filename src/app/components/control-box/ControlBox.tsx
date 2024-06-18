import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import RefreshIcon from "@mui/icons-material/Refresh";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Slider from "@mui/material/Slider";
import { Box, Divider, Typography, Tooltip } from "@mui/material";
import { SyntheticEvent } from "react";
import ToolTip from "./Tooltip";

interface Props {
	generateRandomArray: (value: number) => void;
	setDelayTime: (value: number) => void;
}

export default function ControlBox({
	generateRandomArray,
	setDelayTime,
}: Props) {
	const handleArraySizeSlider = (
		event: SyntheticEvent | Event,
		newValue: number | number[]
	) => {
		generateRandomArray(newValue as number);
	};

	return (
		<Box sx={styles.box}>
			<Box>
				<Typography sx={styles.headerText}>Controls</Typography>
				<Divider sx={{ borderBottomWidth: 3 }} />
			</Box>
			<Box
				display={"flex"}
				justifyContent={"center"}
				sx={{ marginTop: 1 }}>
				<IconButton aria-label="rewind" sx={styles.iconButton}>
					<FastRewindIcon sx={styles.icon} />
				</IconButton>
				<ToolTip title="Play">
					<IconButton aria-label="play/pause" sx={styles.iconButton}>
						<PlayArrowIcon sx={styles.icon} />
					</IconButton>
				</ToolTip>

				<IconButton aria-label="fast foward" sx={styles.iconButton}>
					<FastForwardIcon sx={styles.icon} />
				</IconButton>
			</Box>

			<Box sx={{ marginTop: -1 }}>
				<IconButton aria-label="new array" sx={styles.iconButton}>
					<RefreshIcon sx={styles.icon} />
				</IconButton>

				<IconButton aria-label="restart" sx={styles.iconButton}>
					<RestartAltIcon sx={styles.icon} />
				</IconButton>
			</Box>
			<Box>
				<Box>
					<Typography variant="h6">Array Size</Typography>
					<Slider
						onChangeCommitted={handleArraySizeSlider}
						sx={styles.slider}
						color="secondary"
						min={4}
						max={100}
						defaultValue={20}
					/>
				</Box>
				<Box sx={{ marginTop: -1 }}>
					<Typography variant="h6">Delay</Typography>
					<Slider
						sx={styles.slider}
						color="secondary"
						min={4}
						max={80}
					/>
				</Box>
			</Box>
		</Box>
	);
}

const styles = {
	box: {
		bgcolor: "primary.main",
		display: "flex",
		flexDirection: "column",
		borderRadius: "7px",
		boxShadow: 1,
		height: "100%",
	},
	headerText: {
		fontFamily: "menlo",
		fontWeight: "bold",
		fontSize: 16,
		paddingTop: 1.5,
		paddingBottom: 1.25,
	},
	slider: {
		width: "70%",
		"& .MuiSlider-rail": {
			backgroundColor: "background.default",
		},
	},
	iconButton: {
		margin: 0.5,
		"&:hover": {
			bgcolor: "success.main",
		},
	},
	icon: {
		fontSize: 32,
		color: "text.primary",
		"&:hover": {
			color: "primary.main",
		},
	},
	tooltip: {
		[`& .MuiTooltip-tooltip`]: {
			fontSize: "24px",
			fontFamily: "menlo",
			backgroundColor: "blue",
			color: "white",
			borderRadius: "4px",
		},
		[`& .MuiTooltip-arrow`]: {
			color: "blue",
		},
	},
};
