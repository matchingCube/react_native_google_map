import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
      />
      <StatusBar style="auto" />
      <View style={[styles.container, styles.input_box]}>
        <Text>Pick-up</Text>
        <TextInput
          style={styles.text_input}
          placeholder="Type here city name."
        />
        <Text>Drop-off</Text>
        <TextInput
          style={styles.text_input}
          placeholder="Type here city name."
        />
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={{ color: "#fff" }}>Continue</Text>
        </TouchableOpacity>
      </View>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  text_input: {
    height: 50,
    width: 300,
    backgroundColor: "#efefef",
    borderRadius: 15,
    paddingRight: 20,
    paddingLeft: 20,
    marginVertical: 10,
  },
  input_box: {
    position: "absolute",
    paddingVertical: 30,
    paddingHorizontal: 40,
    top: 80,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
  },
  btnStyle: {
    marginTop: 20,
    backgroundColor: "#36f",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
});
