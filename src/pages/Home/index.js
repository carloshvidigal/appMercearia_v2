import React from 'react'
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useCart } from '../../context/cart'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'


export default () => {

    const navigation = useNavigation()

    const entrarCart = () => {
        navigation.navigate("Cart") 
      }
    
    const { add } = useCart()
        
    const data = [
        {
            id: '1',
            name: 'Abacate',
            price: 6.59,
            img: require('../../assets/avocados.jpeg'),
            tipoVenda: 'Unidade'
        },
        {
            id: '2',
            name: 'Abacaxi',
            price: 4.79,
            img: require('../../assets/pineapple.jpeg'),
            tipoVenda: 'Unidade'
        },
        {
          id: '3',
          name: 'Abobrinha',
          price: 9.79,
          img: require('../../assets/zucchini.jpeg'),
          tipoVenda: 'Kg'
      },
        {
        id: '4',
        name: 'Abobrinha Amarela',
        price: 5.39,
        img: require('../../assets/yellow_squash.jpeg'),
        tipoVenda: 'Kg'
    },

      {
        id: '5',
        name: 'Alho',
        price: 19.39,
        img: require('../../assets/garlic.jpeg'),
        tipoVenda: 'Kg'
      },

      {
        id: '6',
        name: 'Banana',
        price: 3.89,
        img: require('../../assets/bananas.jpeg'),
        tipoVenda: 'Kg'
      },
  
      {
      id: '7',
      name: 'Berinjela',
      price: 2.49,
      img: require('../../assets/eggplant.jpeg'),
      tipoVenda: 'Kg'
      },
      
      {
        id: '8',
        name: 'Brócolis',
        price: 5.89,
        img: require('../../assets/broccoli.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '9',
        name: 'Cebola',
        price: 4.49,
        img: require('../../assets/yellow_onion.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '10',
        name: 'Cebola Roxa',
        price: 5.77,
        img: require('../../assets/red_onion.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '11',
        name: 'Cenoura',
        price: 2.99,
        img: require('../../assets/whole_carrot.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '12',
        name: 'Couve-Flor',
        price: 4.89,
        img: require('../../assets/cauliflower.jpeg'),
        tipoVenda: 'Kg'
      },

      {
        id: '13',
        name: 'Kiwi',
        price: 21.79,
        img: require('../../assets/kiwis.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '13',
        name: 'Limão Siciliano',
        price: 11.49,
        img: require('../../assets/lemons.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '14',
        name: 'Maçã Fuji',
        price: 5.65,
        img: require('../../assets/fuji_apples.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '15',
        name: 'Melancia',
        price: 2.79,
        img: require('../../assets/watermelon.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '16',
        name: 'Milho Verde',
        price: 3.39,
        img: require('../../assets/fresh_corn_cub.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '17',
        name: 'Morango',
        price: 10.89,
        img: require('../../assets/fresh_strawberries.jpeg'),
        tipoVenda: 'Caixa'
      },
      {
        id: '18',
        name: 'Pepino',
        price: 2.69,
        img: require('../../assets/cucumber.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '19',
        name: 'Pimentão Verde',
        price: 3.19,
        img: require('../../assets/green_bell_pepper.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '20',
        name: 'Repolho Verde',
        price: 2.19,
        img: require('../../assets/green_cabbage.png'),
        tipoVenda: 'Kg'
      },
      {
        id: '21',
        name: 'Tomate',
        price: 3.99,
        img: require('../../assets/tomatoes.jpeg'),
        tipoVenda: 'Kg'
      },
      {
        id: '22',
        name: 'Uva Roxa',
        price: 3.59,
        img: require('../../assets/seedless_grapes.jpeg'),
        tipoVenda: 'Kg'
      },      
      {
        id: '23',
        name: 'Uva Verde',
        price: 5.89,
        img: require('../../assets/green_seedless_grapes.jpeg'),
        tipoVenda: 'Kg'
      }

      
      


        
      
    
      ]

    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image 
            source={require('../../assets/merceariaDoZe.png')}
            style={styles.image}
            />
        
        <TouchableOpacity style={{alignSelf: 'center', paddingLeft: 350, paddingTop: 0}} onPress={() => entrarCart()}>
            <MaterialIcons
                name='shopping-cart'
                size={30}
                color='#595B59'
                />
        </TouchableOpacity>
        <View style={styles.line} />

        <ScrollView>
        <FlatList
        data={data}
            contentContainerStyle={{flex: 1, width: '100%',marginTop:0, padding: 10, borderBottomColor: '#ffff'}}
            renderItem={({item}) => {
                return (
                  
                   <TouchableOpacity onPress={() => add(item)} style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                   <Image 
                        source={item.img}
                        style={styles.imageItem} 
                        />
                        <Text style={styles.txtProduct1}>{'\n'}{item.name} {'\n'}R$  {item.price} / {item.tipoVenda}</Text> 
                    </TouchableOpacity>
                )
            }}
            keyExtractor={(item) => item.id}
            >
     
                
            </FlatList>
            </ScrollView>
             </View>
            </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      width: '100%',
      backgroundColor: '#fff',
    },
  
    header: {
      flex: 1,
      marginTop: 30,
      marginLeft: 0,
    },
  
    image: {
      width: '100%',
    },
    textContainer: {
      flexDirection: 'row',
      marginVertical: '5%',
      marginHorizontal: '5%'
    },
    text: {
      marginTop: -30,
      marginLeft: 10,
      fontSize: 26,
      marginHorizontal: '1%',
      fontWeight: 'bold',
      color: '#595B59'
    },
    line: {
      borderBottomColor: '#d8d8d8',
      borderBottomWidth: 2,
      marginTop: 10
    },
    imageItem: {
      width: 130,
      height: 130,
    },
    txtProduct1: {
      fontSize: 20,
      paddingTop: 15,
      paddingLeft: 40,
      fontWeight: 'bold'
    },
    txtProduct2: {
      fontSize: 20,
      paddingTop: 30,
      marginLeft: -100,
      color: '#575C55'
    }
  });
