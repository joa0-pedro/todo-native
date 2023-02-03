import { Clipboard } from "phosphor-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTask(){
	return (
		<View style={styles.emptyTask}>
		<View style={styles.icon}>
			<Clipboard size={64} color="#333333"/>
		</View>
			<Text style={styles.textEmpty1}>Você ainda não tem tarefas cadastradas</Text>
			<Text style={styles.textEmpty2}>Crie tarefas e organize seus itens a fazer</Text>
		</View>
		)
}

