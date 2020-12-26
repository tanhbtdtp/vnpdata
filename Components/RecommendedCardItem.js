import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { CardItem, Right } from "native-base";

class RecommendedCardItem extends Component {
  render() {
    return (
      <CardItem>
        <View>
          <Image
            style={{ height: 90, width: 60 }}
            source={{ uri: this.props.imageUri }}
          />
        </View>
        <Right
          style={{
            flex: 1,
            alignItems: "flex-start",
            height: 90,
            paddingHorizontal: 20,
          }}
        >
          <Text>{this.props.itemName}</Text>
          <Text style={{ color: "grey", fontSize: 11 }}>
            {this.props.itemCreator}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#c4402f" }}>
            {this.props.itemPrice}
          </Text>
          <Text>
            <Text style={{ color: "grey", fontWeight: "300", fontSize: 11 }}>
              Tiết kiệm
            </Text>{" "}
            ${this.props.savings}
          </Text>
        </Right>
      </CardItem>
    );
  }
}
export default RecommendedCardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
