import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';


export default class Main extends React.Component {
render(){
  return (
          
        <Container>
        <Header style={[{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575' }, styles.androidHeader]}>
                <Left style={{ flexDirection: 'row',alignItems:'center' }}>                        
                        <FAIcon name="exclamation-circle" style={{ fontSize: 32, color: 'white' }} />
                        <Text style={{fontSize:32,color:'white',paddingHorizontal:10}}>Vnpt</Text>
                </Left>
                    <Right>
                        <Icon name="md-card" style={{ color: 'white' }} />
                    </Right>
        </Header>
                    <View style={{ position: 'relative', left: 0, right: 0, height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
                       <TouchableOpacity>
                        <View style={{ width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>
                            <Text style={{ fontSize: 12 }}>Shop by</Text>
                            <Text style={{ fontWeight: 'bold' }}>Category</Text>
                        </View>
                       </TouchableOpacity>

                    <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
                        <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                            <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
                            <Input placeholder="Search" />
                        </Item>
                    </View>
          </View>


                <Content style={{ backgroundColor: '#d5d5d6'}}>
                <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text>Hello, Varun Nath</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Your Account </Text>
                            <Icon name="arrow-forward" style={{ fontSize: 18 }} />
                        </View>
                 </View>
                 </Content>
            

        </Container>
   
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1    ,
    backgroundColor:"white"
  },

   viewMiddle:{    
    flexDirection:'row',
    backgroundColor: '#348ceb', 
    alignItems:'center',
    height:100,   
    marginTop:3
  },

  viewBottom :{
    flex:1,    
    backgroundColor: '#096796',       
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
    fontSize:14,
    color: 'white', 
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