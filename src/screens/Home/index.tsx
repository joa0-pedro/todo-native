import { PlusCircle } from 'phosphor-react-native'
import { useState } from 'react'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Header } from '../../components/Header'
import { EmptyTask } from './components/EmptyTask'
import { TaskItem } from './components/TaskItem'
import { styles } from './styles'

export type TaskData = {
	id: string;
	content: string;
	isFinished: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  const [inputBorder, setInputBorder] = useState(0)
  const [inputBorderColor, setInputBorderColor] = useState('#262626')

  const handleFocus = () => {
    setInputBorder(1)
    setInputBorderColor('#5E60CE')
  }

  const handleBlur = () => {
    setInputBorder(0)
    setInputBorderColor('#262626')
  }

  function handleCreateTask() {
		if (newTaskText === '') {
			alert('Insira a descrição da tarefa');
			return;
		}

		const newTask: TaskData = {
			id: uuidv4(),
			content: newTaskText,
			isFinished: false,
		};

		setTasks([...tasks, newTask]);
		setNewTaskText('');
	}

  function handleDeleteTask(id: string, content: string) {
    Alert.alert('Apagar', `Apagar a tarefa ${content}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) =>
            prevState.filter((tasks) => tasks.id !== id),
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function handleFinishTask(id: string) {
    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isFinished: !task.isFinished } : task
      )
    );
}

  return (
    <View>
      <Header />
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
              styles.textInput,
            ]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={setNewTaskText}
            value={newTaskText}
          />
          <TouchableOpacity
            style={styles.addTaskButton}
            onPress={handleCreateTask}
          >
            <PlusCircle size={18} color="#fff" />
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
              <Text style={styles.spanText}>{tasks.filter((task) => task.isFinished).length}</Text>
            </View>
          </View>
        </View>
        <FlatList
				  data={tasks}
				  keyExtractor={(task) => task.id}
				  renderItem={({ item }) => (
				    <TaskItem
				      task={item}
				      onRemove={() => handleDeleteTask(item.id, item.content)}
				      onFinish={() => handleFinishTask(item.id)}
				    />
				  )}
				  showsVerticalScrollIndicator={false}
				  ListEmptyComponent={() => <EmptyTask />}
				/>
      </View>
    </View>
  )
}

