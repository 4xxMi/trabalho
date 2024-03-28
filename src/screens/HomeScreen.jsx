import { useNavigation } from "@react-navigation/native";
import { Button, ImageBackground, Text, View } from "react-native";
import styles from "../config/styles";

export default function HomeScreen({ }) {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/galaxia.jpg")}
      style={styles.imageBackground} opacity="0.5"
    >
      <View style={styles.container}>
        <Text style={styles.walter}> Olá! Seja Bem-Vinde ao Get A Star!</Text>
        <Text style={styles.walter}> Consulte o universo hoje !</Text>
        <Button
          style={styles.Button}
          onPress={() => navigation.navigate("GetStarScreen")}
          title="Consultar galáxia do dia"
        />
      </View>
    </ImageBackground>
  );
}