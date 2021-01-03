import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Container, Content, Icon, Item, Input } from "native-base";

export default class Details extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.txtCaption}>Số điện thoại:</Text>
        <Text>{data.ma_tb}</Text>
        <Text style={styles.txtCaption}>Tên thuê bao:</Text>
        <Text>{data.ten_tb}</Text>
        <Text style={styles.txtCaption}>Địa chỉ:</Text>
        <Text>{data.diachi_tb}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  txtCaption: {
    fontWeight: "bold",
  },
});
