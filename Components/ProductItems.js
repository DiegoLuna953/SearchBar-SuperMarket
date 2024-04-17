import React from "react";
import { View,Text,StyleSheet } from "react-native";

const ProductsItem = ({product}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.textProductTittle}>Nombre del Producto: ${product.name}</Text>
            <Text style={styles.textProductPrice}>Precio: ${product.price}</Text>
            <Text style={styles.textProductDescription}>Descripcion: ${product.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        color: 'white'
    },
    textProductTittle:{
        fontSize: 20,
        fontFamily: 'bold'
    },
    textProductPrice:{
        fontSize: 16
    },
    textProductDescription:{
        fontSize: 14
    }
})

export default ProductsItem;