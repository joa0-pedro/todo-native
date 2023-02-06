import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	taskCard: {
		height: 64,
		alignItems: "center",
		padding: 12,
		borderRadius: 8,
		backgroundColor: "#262626",
		flexDirection: "row",
		marginBottom: 8,
	},
	finishButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	markerButton: {
		marginRight: 8,
	},
	description: {
		fontSize: 14,
		color: "#F2F2F2",
		width: 293,
	},
	deleteButton: {
		marginLeft: 8,
		marginRight: 2,
		// padding: 10,
	},
	descriptionDisabled: {
		fontSize: 14,
		color: "#808080",
		width: 293,
		textDecorationLine: "line-through",
		textDecorationColor: "#808080"
	},
});
