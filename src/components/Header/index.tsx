import { Text, View } from "react-native";
import { styles } from "./styles";
import Rocket from "../../../assets/Logo.svg"

export function Header(){
	return (
		<View style={styles.content}>
			{/* <Rocket /> */}
			<Text style={styles.textTo}>to</Text>
			<Text style={styles.textDo}>do</Text>
		</View>
	)
}
