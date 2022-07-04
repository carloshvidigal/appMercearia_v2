import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

export default function Login({ navigation }) {
  
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrarHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Home"}]
    })
  }

    const entrarCadastro = () => {
      navigation.navigate("Cadastro");
  }
 

 
  return (
   <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
      <Image
        source={require('../../assets/merceariaDoZe.png')}
      />
    </View>

    <View style={styles.container}>
      <TextInput
      style = {styles.input}
      placeholder='Email'
      autoCorrect={false}
      onChangeText={value => setEmail(value)}
      />
      
      <TextInput
      style = {styles.input}
      placeholder='Senha'
      secureTextEntry={true}
      autoCorrect={false}
      onChangeText={value => setPassword(value)}
      />

      <TouchableOpacity style={styles.btnSubmit} onPress={() => entrarHome()}>
        <Text style={styles.textSubmit}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => entrarCadastro()}>
        <Text style ={styles.textRegister}>Criar Conta Gratuita</Text>
      </TouchableOpacity>


    </View>

   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create ({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex:1, 
    alignItems: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: "#BEEBC9",
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 22,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#161B22',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  textSubmit:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'    
  },
  textRegister: {
    fontSize: 15,
    paddingTop: 13,
    textDecorationLine: 'underline',
  }

})