import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Picker,
  Content,
  Spinner,
} from "native-base";
import FAIcon from "react-native-vector-icons/FontAwesome";

class FormGanGoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: "",
      goicuoc: "",
      phonenumber: "",
      isLoading: true,
    };
  }

  _resetData = () => {
    this.setState({
      data: [],
      username: "",
      goicuoc: "",
      phonenumber: "",
      isLoading: true,
    });
  };

  _postData = () => {
    this.setState({ isLoading: false });

    fetch("http:/ttkddongthap.vn/vnpapi/api/Khachhang/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        phonenumber: this.state.phonenumber,
        goicuoc: this.state.goicuoc,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ isStatus: json });
        if (this.state.isStatus[0].status === "Success") {
          Alert.alert("Cập nhật thành công.");
        } else {
          Alert.alert("Cập nhật thất bại");
        }
      })
      .catch(() => {
        Alert.alert("Không thể kết nối Server. Liên hệ Admin.");
      })
      .finally(() => {
        this._resetData();
      });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ width: "100%", backgroundColor: "white" }}>
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
                <Icon name="person" style={{ fontSize: 20, paddingTop: 5 }} />
                <Input
                  placeholder="Số điện thoại..."
                  keyboardType="numeric"
                  value={this.state.phonenumber}
                  onChangeText={(text) => {
                    this.setState({
                      phonenumber: text,
                    });
                  }}
                />
              </Item>
            </View>

            <Item picker>
              <Picker
                Icon="settings"
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Chọn gói cước.."
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.goicuoc}
                onValueChange={(text) => {
                  this.setState({
                    goicuoc: text,
                  });
                  //console.log(this.state.goicuoc);
                }}
              >
                <Picker.Item label="VD149" value="VD149" />
                <Picker.Item label="D60G" value="D60G" />
                <Picker.Item label="VD89" value="VD89" />
              </Picker>
            </Item>
          </View>
        </View>

        <TouchableOpacity onPress={this._postData}>
          {!this.state.isLoading ? (
            <Spinner color="red" />
          ) : (
            <View
              style={{
                backgroundColor: "#3a455c",
                height: 50,
                width: 350,
                borderRadius: 4,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 12, color: "white" }}
              >
                Chấp nhận
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default class GanGoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  loadkhachhang = () => {
    fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: "#d5d5d6" }}>
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
                <Input placeholder="Tìm kiếm..." />
              </Item>
            </View>
          </View>

          <View
            style={{
              height: 50,
              backgroundColor: "#e7e7eb",
              flexDirection: "row",
              paddingHorizontal: 5,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Chọn gói cước</Text>
          </View>

          <FormGanGoi />
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
