import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    backgroundColor: "#1A1A1A",
    height: "100%",
    paddingHorizontal: 24,
  },
  inputArea: {
    marginTop: -35,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
  },
	textInput: {
		width: 327,
		height: 54,
		borderRadius: 8,
		borderWidth: 1,
		backgroundColor: "#262626",
		padding: 16,
		marginRight: 4,
		color: "#D9D9D9",
	},
	addTaskButton: {
		flexDirection: "row",
		backgroundColor: "#1E6F9F",
		width: 52,
		height: 52,
		borderRadius: 6,
		alignItems: "center",
    justifyContent: "center",
	},

	infoContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 32,
		marginBottom: 20,
	},
	contentDetails: {
		flexDirection: "row",
	},
	textStatusCreate: {
		fontWeight: "bold",
		fontSize: 14,
		color: "#4EA8DE",
		marginRight: 8,
	},
	textStatusFinished: {
		fontWeight: "bold",
		fontSize: 14,
		color: "#8284FA",
		marginRight: 8,
	},
	span:{
		width: 25,
		height: 19,
		borderRadius: 999,
		backgroundColor: "#333333",
		justifyContent: "flex-start",
	},
	spanText: {
		fontWeight: "bold",
		color: "#D9D9D9",
		textAlign: "center",
		marginTop: 1,
	},
});

