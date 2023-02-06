import { Text, View } from "react-native";
import { styles } from "./styles";
import { RocketLogo  } from "../../../Icons/Logo";
export function Header(){
	return (
		<View style={styles.content}>
			<View style={styles.logo}>
			<RocketLogo/>
			</View>
			<Text style={styles.textTo}>to</Text>
			<Text style={styles.textDo}>do</Text>
		</View>
	)
}
