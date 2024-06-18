import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import Slider from "@mui/material/Slider";
import { Box, Divider, Typography, useTheme } from "@mui/material";

interface Props {
	arraySize: number;
	delayTime: number;
	setArraySize: (value: number) => void;
	setDelayTime: (value: number) => void;
}

export default function ControlBox({
	arraySize,
	delayTime,
	setArraySize,
	setDelayTime,
}: Props) {
	return (
		<Box sx={styles.box}>
			<Box>
				<Typography sx={styles.headerText}>Controls</Typography>
				<Divider sx={{ borderBottomWidth: 3 }} />
			</Box>
			<Box
				display={"flex"}
				justifyContent={"center"}
				sx={{ marginTop: 2 }}>
				<IconButton aria-label="rewind" sx={styles.iconButton}>
					<FastRewindIcon sx={styles.icon} />
				</IconButton>
				<IconButton aria-label="play/pause" sx={styles.iconButton}>
					<PlayArrowIcon sx={styles.icon} />
				</IconButton>

				<IconButton aria-label="fast foward" sx={styles.iconButton}>
					<FastForwardIcon sx={styles.icon} />
				</IconButton>
			</Box>

			<Box sx={{ marginTop: 2 }}>
				<Box>
					<Typography variant="h6">Array Size</Typography>
					<Slider
						sx={styles.slider}
						color="secondary"
						value={arraySize}
						min={4}
						max={100}
					/>
				</Box>
				<Box>
					<Typography variant="h6">Delay</Typography>
					<Slider
						sx={styles.slider}
						color="secondary"
						value={arraySize}
						min={4}
						max={100}
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
		width: "75%",
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
		fontSize: 36,
		color: "text.primary",
		"&:hover": {
			color: "primary.main",
		},
	},
};
