import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Button } from "react-native";
import { BlurView } from 'expo-blur'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/login1.png")} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle= {{
        flex: 1,
        width: '100%', 
        height: '100%', 
        alignItems: 'center',
        justifyContent:'center'
      }}>
        <BlurView intensity={250}>
          <View style={styles.login}>
            <Image source={require("./assets/blank-profile.png")} style={styles.prefilePicture}/>
            <View>
              <Text style={{fontSize:17, fontWeight: '400', color:'#FF7D61'}}> E-mail </Text>
              <TextInput style={styles.input}>E-mail</TextInput>
            </View>
            <View>
              <Text style={{fontSize:17, fontWeight: '400', color:'#FF7D61'}}> Password </Text>
              <TextInput style={styles.input} placeholder="password" secureTextEntry={true} >Password</TextInput>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{fontSize: 17, fontWeight:'400', color:'#FF7D61'}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor:'#B35545'}]}>
              <Text style={{fontSize: 17, fontWeight:'400', color:'#FF7D61'}}>Create Acount</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
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

  image: {
    width:'100%', 
    height:'100%',
    resizeMode: 'cover',
  },

  login:{
    width:350,
    height:520,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'

  },

  prefilePicture:{
    width: 100,
    height:120,
    borderRadius:50,
    borderColor:'#fff',
    borderWidth:1,
    marginVertical: 30,
  },

  input:{
    width:250,
    height:40,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:10,
    padding:10,
    marginVertical:10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },

  button:{
    width:250,
    height:40,
    borderRadius:10,
    backgroundColor:'#FFA495',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor:'#fff',
    borderWidth: 1,
  },
});
