import React, { Component } from 'react';
import { Container, Content, Button, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity,Alert } from 'react-native';

export default class ListIconExample extends Component {


    onPress = () => {
        
        this.props.navigation.navigate('Home')     ; 
        };      

  render() {
    return (
      <Container>       
        <Content>         
          <TouchableOpacity>
          <ListItem icon onPress={this.onPress}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Thông tin khách hàng</Text>
            </Body>
            <Right>              
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          </TouchableOpacity>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Gán gói cước</Text>
            </Body>
            <Right>              
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}