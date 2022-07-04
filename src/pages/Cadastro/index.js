import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Touchable } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function App() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');

  const cadastro = () => {
    alert('funcionou');
  }


  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={{width:300,height:100, marginTop: -150 }}source={require('../../assets/merceariaDoZe.png')} />

      <TextInput placeholder = "Nome" style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder = "E-mail" style={styles.textInput} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder = "Senha" style={styles.textInput} onChangeText={text=>setSenha(text)} />
      <TextInput secureTextEntry={true} placeholder = "Confirme a senha" style={styles.textInput} onChangeText={text=>setConfirmaSenha(text)} />
      <TextInput placeholder = "Telefone" style={styles.textInputSmall} onChangeText={text=>setTelefone(text)} />
      <TextInput placeholder = "Logradouro" style={styles.textInput} onChangeText={text=>setLogradouro(text)} />
      <TextInput placeholder = "Numero/Complemento" style={styles.textInput} onChangeText={text=>setNumero(text)} />
      <TextInput placeholder = "Bairro" style={styles.textInput} onChangeText={text=>setBairro(text)} />
      <TextInput placeholder = "CEP" style={styles.textInputSmall} onChangeText={text=>setCep(text)} />
      
      
      

      <TouchableOpacity style={styles.btnSubmit} onPress={()=>cadastro()}>
        <Text style={styles.textSubmit}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#BEEBC9',
    borderRadius: 20, 
    paddingLeft: 10,
    marginBottom: 10,
  },
  textInputSmall: {
    width: '50%',
    height: 40,
    backgroundColor: '#BEEBC9',
    borderRadius: 20, 
    paddingLeft: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
    marginRight: 180
  },

  btnSubmit: {
    backgroundColor: '#161B22',
    width: '40%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20
  },
  textSubmit:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'    
  }

});