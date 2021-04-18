import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './pages/userlist/index'
import Registrasi from './pages/registrasi/index'
import List from './pages/searchJSON/index'
const App = () => {
  return (
    <View>
       {/* <HomeScreen/> */}
       {/* <Registrasi/>  */}
      <List/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
