import { CheckCircle, Circle, Trash } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { TaskData } from "../..";
import { styles } from "./styles";

interface TaskProps  {
	task: TaskData;
	onRemove: () => void;
	onFinish: () => void;
}

export function TaskItem({ task, onFinish, onRemove }:TaskProps){
	return (
		<View style={styles.taskCard}>

				<>
				<TouchableOpacity onPress={onFinish} hitSlop={{top: 23, bottom: 22, left: 20, right: 280}}>
				<View style={styles.markerButton} >
				{task.isFinished ? (<CheckCircle size={20} weight="fill" color="#5E60CE"/>) : (<Circle size={20} color="#1E6F9F"/>)}
				</View>
				</TouchableOpacity>
				{task.isFinished ? (<Text style={styles.descriptionDisabled}>{task.content}</Text>) : (<Text style={styles.description}>{task.content}</Text>) }
				<View style={styles.deleteButton}>
				<TouchableOpacity onPress={onRemove} hitSlop={{top: 25, bottom: 24, left: 20, right: 40}}>
					<Trash size={17} color="#808080" weight="bold" />
				</TouchableOpacity>
				</View>
			</>
		</View>
	)
}
