import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Test extends React.Component {
render(){

  return (
    <View style={styles.container}>
       <View style={styles.v1}></View>
       <View style={styles.v2}></View>
       <View style={styles.v3}></View>


    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',   
  },
  v1:{
    flex:1,
    backgroundColor: 'blue',  
    height:100,  
  },
  v2:{  
    backgroundColor: 'yellow',
    position:'absolute',
    height:100,
    width:100,  
    marginTop:40,
    marginLeft:30
  },
  v3:{
    flex:1,
    backgroundColor: 'red',
  }

});
