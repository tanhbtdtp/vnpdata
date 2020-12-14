import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Home extends React.Component {

render(){
  return (
    <View style={styles.container}>             
             <Image
                  source={{
                    uri: 'http://ttkddongthap.vn/tainguyen/images/toanha_ttkd.jpg',
                  }}
                  style={styles.imgCaNhan}
                />        
       <View style={styles.viewMiddle}></View>    
       <View style={styles.viewBottom}></View>     
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1    
  },

   viewMiddle:{    
    backgroundColor: 'blue', 
    height:100,   
    marginTop:10
  },

  viewBottom :{
    flex:1,    
    backgroundColor: 'gray',       
    padding:10,
    marginTop:10
    
  },

  imgCaNhan: {
    flex: 1,
    resizeMode: 'cover',
    height:300
  },

});
