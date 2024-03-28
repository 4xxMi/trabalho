import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "cover", 
},
  walter: {
    color:"white", 
    fontSize: 16,
    fontFamily: "Comic Sans MS"
  },
  Button: {
    color: "#5550B6",
    fontWeight:"bold"
  }
});

export default styles;
