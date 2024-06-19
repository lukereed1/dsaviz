import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import RefreshIcon from "@mui/icons-material/Refresh";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Slider from "@mui/material/Slider";
import { Box, Divider, Typography } from "@mui/material";
import { MutableRefObject, SyntheticEvent, useState } from "react";
import ToolTipMessage from "./ToolTip";

interface Props {
	generateRandomArray: (value: number) => number[];
	algo: () => Promise<void>;
	setData: (nums: number[]) => void;
	setDelayTime: (value: number) => void;
	setSortedIndices: (nums: number[]) => void;
	stopSorting: () => void;
	nextStep: () => void;
	isPlayingRef: MutableRefObject<boolean>;
	sortingRef: MutableRefObject<boolean>;
	data: number[] | undefined;
	arrayLength: number;
}

export default function ControlBox(props: Props) {
	const {
		arrayLength,
		isPlayingRef,
		sortingRef,
		algo,
		generateRandomArray,
		setData,
		setDelayTime,
		nextStep,
		stopSorting,
		setSortedIndices,
	} = props;

	const [playing, setPlaying] = useState<boolean>(false);

	function handleArraySizeSlider(
		event: SyntheticEvent | Event,
		newValue: number | number[]
	) {
		setPlaying(false);
		stopSorting();
		setSortedIndices([]);
		const updatedData = generateRandomArray(newValue as number);
		setData(updatedData);
	}

	function handleTimeDelaySlider(
		event: SyntheticEvent | Event,
		newValue: number | number[]
	) {
		setDelayTime(newValue as number);
	}

	function handlePlayButton() {
		if (isPlayingRef.current) {
			isPlayingRef.current = false;
			setPlaying(false);
		} else {
			isPlayingRef.current = true;
			setPlaying(true);
			if (!sortingRef.current) {
				algo();
			} else {
				console.log("test");
				nextStep();
			}
		}
	}

	function handleNewDataButton() {
		setPlaying(false);
		stopSorting();
		const newData = generateRandomArray(arrayLength);
		setSortedIndices([]);
		setData(newData);
	}

	return (
		<Box sx={styles.box}>
			<Box>
				<Typography sx={styles.headerText}>Controls</Typography>
				<Divider sx={{ borderBottomWidth: 3 }} />
			</Box>
			<Box
				display={"flex"}
				justifyContent={"center"}
				sx={{ marginTop: 1 }}
				gap={1}>
				<ToolTipMessage title="Step Back" top={true}>
					<IconButton aria-label="rewind" sx={styles.iconButton}>
						<FastRewindIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
				<ToolTipMessage title="Play" top={true}>
					<IconButton
						aria-label="play/pause"
						sx={styles.iconButton}
						onClick={handlePlayButton}>
						{playing ? (
							<PauseIcon sx={styles.icon} />
						) : (
							<PlayArrowIcon sx={styles.icon} />
						)}
					</IconButton>
				</ToolTipMessage>
				<ToolTipMessage title="Step Forward" top={true}>
					<IconButton
						aria-label="fast foward"
						sx={styles.iconButton}
						onClick={nextStep}>
						<FastForwardIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
			</Box>

			<Box sx={styles.lowerButtons}>
				<ToolTipMessage title="New Array">
					<IconButton
						aria-label="new array"
						sx={styles.iconButton}
						onClick={handleNewDataButton}>
						<RefreshIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
				<ToolTipMessage title="Restart Settings">
					<IconButton aria-label="restart" sx={styles.iconButton}>
						<RestartAltIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
			</Box>
			<Box sx={{ marginTop: 0.75 }}>
				<Box>
					<Typography sx={styles.sliderText}>Array Size</Typography>
					<Slider
						onChangeCommitted={handleArraySizeSlider}
						sx={styles.slider}
						color="secondary"
						min={4}
						max={100}
						defaultValue={20}
					/>
				</Box>
				<Box>
					<Typography sx={styles.sliderText}>Delay</Typography>
					<Slider
						onChangeCommitted={handleTimeDelaySlider}
						sx={styles.slider}
						color="secondary"
						min={0}
						max={1000}
						defaultValue={0}
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
	lowerButtons: {
		marginTop: -1,
		display: "flex",
		justifyContent: "center",
		gap: 1,
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
	sliderText: { fontFamily: "menlo", fontSize: 16 },
};
