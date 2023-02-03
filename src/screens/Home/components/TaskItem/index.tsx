import { Circle, Trash } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type TaskProps = {
	content: string;
	isFinished: boolean;
	onRemove: () => void;
	onFinish: () => void;
}

export function TaskItem({content, onRemove}:TaskProps){
	function onFinish(){

	}

	return (
		<View style={styles.taskCard}>
			<View style={styles.markerButton} >
			<TouchableOpacity onPress={onFinish}>
			<Circle size={17} color="#4EA8DE" weight="bold"/>
			</TouchableOpacity>
			</View>
			<Text style={styles.description}>{content}</Text>
			<View style={styles.deleteButton}>
			<TouchableOpacity onPress={onRemove}>
				<Trash size={17} color="#808080" weight="bold" />
			</TouchableOpacity>
			</View>
		</View>
	)
}
