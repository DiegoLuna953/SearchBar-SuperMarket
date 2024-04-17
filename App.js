import React, {useEffect, useState} from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./Components/SearchBar";
import ProductList from "./Components/ProductList";
import products from "./data.js";

export default function App () {
  const[search, setSearch] = useState('');
  const[filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (search === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search]);

  return(
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={(text) => setSearch(text)} />

      <ProductList products={filteredProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF3D5',
    paddingTop: 100,
    alignItems: 'center'
  }
})