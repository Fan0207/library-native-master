import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

const axios = require("axios");

class LibraryScreen extends Component {
  state = {
    books: [],
    search: "",
  };
  updateSearch = (search) => {
    this.setState({ search });
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

    axios.get(url).then((result) => {
      console.log(result.data.items.length);
      result.data.items.forEach((book) => console.log(book.volumeInfo.title));
      this.setState({ books: result.data.items });
    });
  };

  render() {
    const { navigation } = this.props;
    const { books, search } = this.state;

    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        {books.map((book) => {
          <View>
            <Text>{book.volumeInfo.title}</Text>;
            <Text>{book.volumeInfo.authors}</Text>;
          </View>;
        })}
      </View>
    );

    /*return (
      <View style={styles.container}>

          
        <Text
          onPress={() => navigation.navigate("book", { title: "SDA - Commu" })}
        >
          Seigneur des anneaux: La communauté de l'anneau
        </Text>
        <Text>Seigneur des anneaux: Les 2 tours</Text>
        <Text>Seigneur des anneaux: Le retour du roi</Text>
      </View>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default LibraryScreen;
