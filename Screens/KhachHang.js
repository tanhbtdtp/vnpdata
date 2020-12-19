import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Input,
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";

class HeaderPage extends React.Component {
  render() {
    return (
      <View
        style={{
          position: "relative",
          left: 0,
          right: 0,
          height: 70,
          backgroundColor: "#3a455c",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              width: 100,
              backgroundColor: "#e7e7eb",
              height: 50,
              borderRadius: 4,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>Search </Text>
            <Text style={{ fontWeight: "bold" }}>Vinaphone</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            height: "100%",
            marginLeft: 5,
            justifyContent: "center",
          }}
        >
          <Item
            style={{
              backgroundColor: "white",
              paddingHorizontal: 10,
              borderRadius: 4,
            }}
          >
            <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
            <Input placeholder="Số điện thoại..." />
          </Item>
        </View>
      </View>
    );
  }
}

export default class KhachHang extends React.Component {
  render() {
    return (
      <Container>
        <HeaderPage />
        <Content style={{ backgroundColor: "#d5d5d6" }}>
          <View
            style={{
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              paddingHorizontal: 5,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Thông tin khách hàng</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
