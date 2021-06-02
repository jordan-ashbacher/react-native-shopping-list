import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import Header from './components/Header'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const idGenerator = () => {
  return Math.floor(Math.random() * 1000)
}

const App = () => {

  const [items, setItems] = useState([
    {id: idGenerator(), text: 'Milk'},
    {id: idGenerator(), text: 'Eggs'},
    {id: idGenerator(), text: 'Bread'},
    {id: idGenerator(), text: 'Juice'},
  ])

  return(
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App