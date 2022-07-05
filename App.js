import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
const Texto = (props) => {
  const [texto, setTexto] = useState("Hola mundo")
  const actualizaTexto = () => {
    setTexto('chao mundo')
  }
    return (
      <Text onPress={actualizaTexto}>{texto}</Text>
    )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
