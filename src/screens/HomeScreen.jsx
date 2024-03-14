import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ }) {
    const navigation = useNavigation();
  
    return (
      <View>
          <Text> Olá! Seja Bem-Vinde ao Get A Star!</Text>
          <Text> Consulte o universo hoje !</Text>
            <Button
              onPress = {() => navigation.navigate("GetStarScreen")}
              title= "Consultar galáxia do dia"
            />
      </View>
    );
  }