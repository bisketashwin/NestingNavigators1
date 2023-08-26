import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
     const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <Button title='Log in' onPress={() => navigation.navigate('Home'as never)}/>
    </View>
    
  )
}

export default SignIn

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})