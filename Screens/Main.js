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
  Card,
  CardItem,
  ListItem,
  Button,
  Body,
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";
import RecommendedCardItem from "../Components/RecommendedCardItem";

export default class Main extends React.Component {
  onPressKhachHang = () => {
    this.props.navigation.navigate("KhachHang");
  };
  onPressGanGoi = () => {
    this.props.navigation.navigate("GanGoi");
  };

  render() {
    return (
      <Container>
        <Header
          style={[
            {
              backgroundColor: "#3a455c",
              height: 90,
              borderBottomColor: "#757575",
            },
            styles.androidHeader,
          ]}
        >
          <Left style={{ flexDirection: "row", alignItems: "center" }}>
            <FAIcon
              name="exclamation-circle"
              style={{ fontSize: 32, color: "white" }}
            />
            <Text
              style={{ fontSize: 32, color: "white", paddingHorizontal: 10 }}
            >
              Vnpt
            </Text>
          </Left>
          <Right>
            <Icon name="md-card" style={{ color: "white" }} />
          </Right>
        </Header>
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
          <TouchableOpacity onPress={this.onPress}>
            <View
              style={{
                width: 100,
                backgroundColor: "#e7e7eb",
                height: 50,
                borderRadius: 4,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 12 }}>Home by</Text>
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
              <Input placeholder="Tìm kiếm" />
            </Item>
          </View>
        </View>

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
            <Text>Hello, Thanh Tân</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>Tài khoản </Text>
              <Icon name="arrow-forward" style={{ fontSize: 18 }} />
            </View>
          </View>

          <Card style={{ marginLeft: 5, marginRight: 5 }}>
            <CardItem
              header
              style={{ borderBottomWidth: 1, borderBottomColor: "#dee0e2" }}
            >
              <Text>Quảng cáo</Text>
            </CardItem>
            <RecommendedCardItem
              itemName="Gói cước VD149"
              itemCreator="vinaphone"
              itemPrice="149.000 đồng"
              savings="2.5"
              imageUri="https://vnpt.com.vn/Media/Images/27072020/Home CF.jpg"
              rating={5}
            />
          </Card>

          <Card>
            <CardItem
              header
              style={{ borderBottomWidth: 1, borderBottomColor: "#dee0e2" }}
            >
              <Text>Tiện ích</Text>
            </CardItem>
            <TouchableOpacity>
              <ListItem icon onPress={this.onPressKhachHang}>
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
            <TouchableOpacity>
              <ListItem icon onPress={this.onPressGanGoi}>
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
            </TouchableOpacity>
          </Card>
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
