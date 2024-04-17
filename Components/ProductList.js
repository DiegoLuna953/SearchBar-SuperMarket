import React from "react";
import { FlatList,StyleSheet } from "react-native";
import ProductsItem from "./ProductItems";

const ProductList = ({ products }) => {
    //console.log(products);
    return(
        <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({item})=>{
            return <ProductsItem product={item}/>
        }}
        style={styles.flatlist}
        />
    );
}

const styles = StyleSheet.create({
    flatlist:{
        backgroundColor: 'red',
        display: 'flex',
        borderStyle: 'dashed'
    }
})

export default ProductList;