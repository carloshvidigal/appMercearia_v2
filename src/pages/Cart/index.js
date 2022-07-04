import React from 'react'
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useCart } from '../../context/cart'

export default () => {
    
    const { remove, cart, totalValue } = useCart()
    
    
    return (
        <View style={{flex: 1}}>
        <FlatList
            data={cart}
            contentContainerStyle={{ flex:1, width: '100%', padding: 10 }}
            renderItem={({ index, item } ) => {
                return (
                    <TouchableOpacity onPress={() => remove(index)} style={{ width: '100%', height: 50, padding: 10, borderWidth: 1, marginVertical: 10}}>
                        <Text>Produto: {item.name}</Text>
                        <Text>Preço: {item.price}</Text>

                    </TouchableOpacity>
                )
            }}
            keyExtractor={(item) => item.id}
        >

        </FlatList>
        <Text style={styles.value}> Valor total: R$ {totalValue}</Text>
        <Text style={styles.obs}> * O valor total é aproximado, podendo variar para mais ou menos.</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    value: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30,
        marginLeft: 160,
        backgroundColor: '#FF4242',
        color: '#EAEBED'
    },
    obs: {
        marginBottom: 50,
        marginLeft: 20,
        fontWeight: 'bold'
    }





})