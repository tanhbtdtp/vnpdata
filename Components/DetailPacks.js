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
            source={{
              uri:
                this.props.data.item.urlToImage != null
                  ? this.props.data.item.urlToImage
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=",
            }}
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
          <Text>{this.props.data.item.title}</Text>
          <Text style={{ color: "grey", fontSize: 11 }}>
            {this.props.data.item.title}
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#c4402f" }}>
            {this.props.itemPrice}
          </Text>
          <Text>
            <Text style={{ color: "grey", fontWeight: "300", fontSize: 11 }}>
              Tiết kiệm
            </Text>{" "}
            ${this.props.data.item.releaseYear}
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
