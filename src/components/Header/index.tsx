import { Text, View } from "react-native";
import { styles } from "./styles";
// import {logo} from "../../../assets/Logo.svg"

export function Header(){
	return (
		<View style={styles.content}>
			{/* <img src={logo} alt="" /> */}
			<Text style={styles.textTo}>to</Text>
			<Text style={styles.textDo}>do</Text>
		</View>
	)
}
