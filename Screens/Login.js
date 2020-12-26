import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Item, Input, Icon, Button } from "native-base";

export default class Login extends React.Component {
constructor(props){
  super(props);
  this.state= {
    username:"",
    password:"",
    isLogin :false
  }
}

_login = ()=>{
  const {password,username} = this.state
   if (username === password) {
    this.props.navigation.replace("Main");
   }
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <Image
            source={{
              uri: "http://ttkddongthap.vn/tainguyen/images/toanha_ttkd.jpg",
            }}
            style={styles.imgHeader}
          />
        </View>
        <View style={styles.viewBottom}>
          <Text style={styles.txtDangNhap}>Đăng nhập</Text>

          <View
            style={{
              marginTop: 30,
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
              <Input placeholder="Tài khoản..." 
                     value ={this.state.username}
                     onChangeText={(text) => {
                     this.setState ({username:text})
           }}
              />
            </Item>

            <Item
              style={{
                backgroundColor: "white",
                paddingHorizontal: 10,
                borderRadius: 4,
                marginTop: 10,
              }}
            >
              <Icon name="key" style={{ fontSize: 20, paddingTop: 5 }} />
              <Input placeholder="Mật khẩu..."  
              value={this.state.password}
                     onChangeText={(text) => {
                          this.setState ({password:text})
                     }}
              />
            </Item>

            <View style={styles.viewLogin}>
              <Button block info 
              onPress={this._login}
              >
          
                <Text style={styles.txtLogin}>ĐĂNG NHẬP</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a455c",
  },

  imgHeader: {
    resizeMode: "cover",
    borderRadius: 100,
    height: 200,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  viewTop: {
    flex: 1,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  viewBottom: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  viewLogin: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 30,
  },

  txtDangNhap: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },

  txtLogin: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },

  txtQuenmatkhau: {
    marginTop: 10,
  },

  btnLogin: {
    marginVertical: 30,
    width: "80%",
  },
});
