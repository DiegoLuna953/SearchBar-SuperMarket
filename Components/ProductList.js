import React from "react";
import { FlatList,StyleSheet } from "react-native";
import ProductsItem from "./ProductItems";

const ProductList = ({ products }) => {
    return(
        <FlatList
        data={products}
        keyExtractor={(product) => product.id.toString()}
        renderItem={({item})=>{
            <ProductsItem product={item}/>
        }} />
    );
}

const styles = StyleSheet.create({
    flatlist:{
        backgroundColor: 'grey'
    }
})

export default ProductList;