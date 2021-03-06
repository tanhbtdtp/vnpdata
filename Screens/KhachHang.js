import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Container, Content, Icon, Item, Input } from "native-base";

import DetailKhachHang from "../Components/DetailKhachHang";

class Details extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <Text>Số điện thoại: {data.ma_tb} </Text>
        <Text>Tên thuê bao: {data.ten_tb} </Text>
        <Text>Địa chỉ: {data.diachi_tb} </Text>
      </View>
    );
  }
}

export default class KhachHang extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      id: null,
      isLoading: false,
    };
  }

  loadkhachhang = () => {
    fetch("http://ttkddongthap.vn/vnpapi/api/khachhang/" + this.state.id)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json[0],
          isLoading: true,
        });
        //console.log(this.state.data[0].ma_tb);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <Container>
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
          <TouchableOpacity onPress={this.loadkhachhang}>
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
              <Input
                placeholder="Số điện thoại..."
                value={this.state.id}
                onChangeText={(text) => {
                  this.setState({
                    id: text,
                  });
                  //console.log(this.state.id);
                }}
              />
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
            <Text>Thông tin khách hàng</Text>
          </View>

          <DetailKhachHang data={this.state.data} />
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
