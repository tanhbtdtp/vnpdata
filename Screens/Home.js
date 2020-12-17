import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Container,Content,Header,Left,Right,Icon } from 'native-base';

export default class Home extends React.Component {
render(){
  return (
    <View style={styles.container}>             
             <Image
                  source={{
                    uri: 'http://ttkddongthap.vn/tainguyen/images/toanha_ttkd.jpg',
                  }}
                  style={styles.imgHeader}
                />        
       <View style={styles.viewMiddle}>
          <View style={styles.imgAvatar}>
          <Image
                  source={{
                    uri: 'http://ttkddongthap.vn/tainguyen/images/anhdoan.jpg',
                  }}
                  style={styles.imgAvatar}
                />
          </View>

          <View style={styles.viewInfo}>
            <Text style={styles.txtHoten}>Truong Van Doan</Text>
            <Text style={styles.txtDonvi}>PBH Chau Thanh</Text>
          </View>
      
         </View>    
       <View style={styles.viewBottom}></View>     
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1    ,
    backgroundColor:'#3a455c'
  },

   viewMiddle:{    
    flexDirection:'row',
    backgroundColor: 'white', 
    alignItems:'center',
    height:100,   
    marginTop:3
  },

  viewBottom :{
    flex:1,    
    backgroundColor: '#3a455c',       
    marginTop:3
  },
  imgHeader: {
    resizeMode: 'cover',
    height:260
  },
  viewInfo:{
    padding:10
  },
  txtHoten:{
    fontSize:14
  },
  txtDonvi:{
    fontSize:12,
    color: '#d0d6d9', 
  },
  imgAvatar: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
});
