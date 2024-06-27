import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RefreshIcon from "@mui/icons-material/Refresh";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Slider from "@mui/material/Slider";
import { Box, Divider, Typography } from "@mui/material";
import { MutableRefObject, SyntheticEvent, useState } from "react";
import ToolTipMessage from "./ToolTipMessage";
import { generateRandomArray } from "../../util/util";

interface Props {
	algo: () => Promise<void>;
	setData: (nums: number[]) => void;
	setSortedIndices: (nums: number[]) => void;
	stopSorting: () => void;
	nextStep: () => void;
	showValues: () => void;
	isPlayingRef: MutableRefObject<boolean>;
	sortingRef: MutableRefObject<boolean>;
	delayTimeRef: MutableRefObject<number>;
	initDataRef: MutableRefObject<number[]>;
	arrayLength: number;
}

export default function ControlBox(props: Props) {
	const {
		arrayLength,
		isPlayingRef,
		sortingRef,
		delayTimeRef,
		initDataRef,
		algo,
		setData,
		showValues,
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
		initDataRef.current = generateRandomArray(newValue as number);
		setData(initDataRef.current);
	}

	function handleTimeDelaySlider(
		event: SyntheticEvent | Event,
		newValue: number | number[]
	) {
		delayTimeRef.current = newValue as number;
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
				nextStep();
			}
		}
	}

	function handleNewDataButton() {
		setPlaying(false);
		stopSorting();
		setSortedIndices([]);
		initDataRef.current = generateRandomArray(arrayLength);
		setData(initDataRef.current);
	}

	function handleNextButton() {
		if (!sortingRef.current) {
			// Allows stepping before clicking play
			algo();
			isPlayingRef.current = false;
		}
		nextStep();
	}

	function handleRestartButton() {
		setPlaying(false);
		stopSorting();
		setSortedIndices([]);
		setData(initDataRef.current); // Use spread operator to ensure a new array instance is set
	}

	return (
		<Box sx={styles.box}>
			<Box>
				<Typography sx={styles.headerText}>Controls</Typography>
				<Divider sx={{ borderBottomWidth: 3 }} />
			</Box>
			<Box sx={styles.upperButtons}>
				<ToolTipMessage title="Toggle Values" top={true}>
					<IconButton
						aria-label="toggle values"
						sx={styles.iconButton}
						onClick={showValues}>
						<QuestionMarkIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
				<ToolTipMessage title={playing ? "Pause" : "Play"} top={true}>
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
				<ToolTipMessage title="Step Through" top={true}>
					<IconButton
						aria-label="step"
						sx={styles.iconButton}
						onClick={handleNextButton}>
						<FastForwardIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
			</Box>

			<Box sx={styles.lowerButtons}>
				<ToolTipMessage title="New Data">
					<IconButton
						aria-label="new data"
						sx={styles.iconButton}
						onClick={handleNewDataButton}>
						<RefreshIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
				<ToolTipMessage title="Restart">
					<IconButton
						aria-label="restart"
						sx={styles.iconButton}
						onClick={handleRestartButton}>
						<RestartAltIcon sx={styles.icon} />
					</IconButton>
				</ToolTipMessage>
			</Box>
			<Box>
				<Box sx={{ marginTop: 0.5 }}>
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
	upperButtons: {
		display: "flex",
		justifyContent: "center",
		gap: 2,
		marginTop: 1,
	},
	lowerButtons: {
		marginTop: -1,
		display: "flex",
		justifyContent: "center",
		gap: 2,
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
