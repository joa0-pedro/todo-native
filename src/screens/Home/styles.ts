import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    backgroundColor: "#1A1A1A",
    height: "100%",
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
		borderColor: "#0D0D0D",
		backgroundColor: "#262626",
		padding: 16,
		marginRight: 4,
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
	containerContent: {
		paddingHorizontal: 24
	},
	infoContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 32,
		marginBottom: 20,
	},
	textCreated: {
		fontWeight: "bold",
		fontSize: 14,
		color: "#4EA8DE",
	},
	textFinished: {
		fontWeight: "bold",
		fontSize: 14,
		color: "#8284FA",
	},
	emptyTask: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
		borderTopColor: "#808080",
		borderTopWidth: 1,
	},
	createdSpan:{
		width: 25,
		height: 19,
		borderRadius: 999,
		color: "#D9D9D9",
		backgroundColor: "#333333",
		paddingHorizontal: 8,
		paddingVertical: 2,
	},
	finishedSpan:{
		width: 25,
		height: 19,
		borderRadius: 99,
		color: "#D9D9D9",
		backgroundColor: "#333333"
	},
	textEmpty1:{
		fontWeight: "bold",
		fontSize: 14,
		color: "#808080",
		marginTop: 16,
	},
	textEmpty2:{
		fontSize: 14,
		color: "#808080"
	},
});

