import { PlusCircle } from "phosphor-react-native";
import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { EmptyTask } from "./components/EmptyTask";
import { TaskItem } from "./components/TaskItem";
import { styles } from "./styles";

export function Home(){
//how to create a item using typescript on react-native
	const [tasks, setTasks] = useState<string[]>([]);
	const [newTaskText, setNewTaskText] = useState('');
	const [finished, setFinished] = useState(false)

  const [inputBorder, setInputBorder] = useState(0)
	const [inputBorderColor, setInputBorderColor] = useState("#262626");

	const handleFocus = () => {
		setInputBorder(1);
		setInputBorderColor("#5E60CE");
	};

	const handleBlur = () => {
		setInputBorder(0);
		setInputBorderColor("#262626");
	};

	function handleCreateTask(){
		if (newTaskText == ""){
			alert("Insira a descrição da tarefa");
			return;
		}
		if (tasks.includes(newTaskText)) {
			Alert.alert("Erro", "Essa tarefa ja existe")
			setNewTaskText("");
			return;
		}
		setTasks(tasks => [...tasks, newTaskText]);
    setNewTaskText('');
	}

	// function handleCreate(content: string) {
  //   setTasks((state) => [
  //     ...state,
  //     {
  //       id: "123",
  //       content,
  //       finishCode: "1",
  //       isFinished: false,
  //     },
  //   ]);
  // }

	function handleDeleteTask(content: string) {
		Alert.alert("Apagar", `Apagar a tarefa ${content}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(tasks => tasks !== content))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
	}

	function handleFinishTask(id: string) {
		setFinished(true);
    setTasks(prevState => prevState.filter(tasks => tasks!== id));
  }

	return (
		<View>
			<Header/>
			<View style={styles.content}>
				<View style={styles.inputArea}>
					<TextInput
						placeholder="Adicione uma tarefa"
						placeholderTextColor="#808080"
						style={[
							{
								borderWidth: inputBorder,
								borderColor: inputBorderColor,
							},
							styles.textInput]}
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChangeText={setNewTaskText}
						value={newTaskText}

					/>
					<TouchableOpacity style={styles.addTaskButton} onPress={handleCreateTask}>
	            <PlusCircle size={18} color="#fff"/>
	        </TouchableOpacity>
				</View>
					<View style={styles.infoContent}>
						<View style={styles.contentDetails}>
							<Text style={styles.textStatusCreate}>Criadas</Text>
							<View style={styles.span}>
									<Text style={styles.spanText}>{tasks.length}</Text>
							</View>
						</View>
						<View style={styles.contentDetails}>
							<Text style={styles.textStatusFinished}>Concluídas</Text>
								<View style={styles.span}>
									<Text style={styles.spanText}></Text>
								</View>
						</View>
					</View>
					<FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TaskItem
            key={item}
            content={item}
            isFinished = {false}
            onRemove={() => handleDeleteTask(item)}
            onFinish={() => handleFinishTask}
          />
        )}
        showsVerticalScrollIndicator={false}
					ListEmptyComponent={() => (
            <EmptyTask />
          )}
				/>
			</View>
		</View>
	)
}
//
