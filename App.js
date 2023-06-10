import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import RadioButton from "./RadioButton";
import { login } from "./ForumApi";
export default function App() {
  const data = [
    { value: "Apple" },
    { value: "Samsung" },
    { value: "Blackberry" },
  ];
  const Login = async () => {
    const email = "elys@gmail.com";
    const password = "elys123";
    const response = login({ email, password });
    console.log(response);
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.paragraph}>Choose your favorite company: </Text>
      <RadioButton data={data} /> */}
      <Button title="login" onPress={() => Login()}>
        tes
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
