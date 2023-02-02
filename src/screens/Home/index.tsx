import { PlusCircle } from "phosphor-react-native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import clipboard  from "../../../assets/Clipboard.svg"

export function Home(){
//how to fix error: Type 'FunctionComponent<SVGAttributes<SVGElement>>' is not assignable to type 'string'.

	return (
		<View>
		<Header/>
		<View style={styles.content}>
			<View style={styles.inputArea}>
				<TextInput
				placeholder="Adicione uma tarefa"
				placeholderTextColor="#808080"
				style={styles.textInput}>
				</TextInput>
				<TouchableOpacity style={styles.addTaskButton}>
            <PlusCircle size={18} color="#fff"/>
        </TouchableOpacity>
			</View>
			<View style={styles.containerContent}>
				<View style={styles.infoContent}>
					<Text style={styles.textCreated}>Criadas <Text style={styles.createdSpan}>1</Text></Text>
					<Text style={styles.textFinished}>Concluídas <Text style={styles.finishedSpan}>5</Text></Text>
				</View>
				<View style={styles.emptyTask}>
					{/* <img src= {clipboard} /> */}
					<Text style={styles.textEmpty1}>Você ainda não tem tarefas cadastradas</Text>
					<Text style={styles.textEmpty2}>Crie tarefas e organize seus itens a fazer</Text>
				</View>
			</View>
		</View>
		</View>

	)
}
