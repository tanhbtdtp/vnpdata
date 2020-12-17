import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ActivityIndicator,FlatList } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';


export default class GanGoi extends React.Component {    

constructor(props){
    super(props);  
    this.state = {
      data: [],
      isLoading: true
    };  
}

loadkhachhang = () =>{
      fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });        
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });        
      });
}


    componentDidMount() {       
        this.loadkhachhang();
    }


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
                            <Text style={{ fontSize: 12}}>Search </Text>
                            <Text style={{ fontWeight: 'bold' }}>Vinaphone</Text>
                        </View>
                       </TouchableOpacity>

                    <View style={{ flex: 1, height: "100%", marginLeft: 5, justifyContent: 'center' }}>
                        <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
                            <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
                            <Input placeholder="Số điện thoại..." />
                        </Item>
                    </View>                  
          </View>               

       
       <View style={{ height: 50, backgroundColor: '#e7e7eb', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                     <Text>Thông tin khách hàng</Text>                           
       </View>

      <View style={{ flex: 1, padding: 20 }}>
        {this.state.isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={this.state.data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>

        </Container>
   
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1    ,
    backgroundColor:"white"
  },

   
});
