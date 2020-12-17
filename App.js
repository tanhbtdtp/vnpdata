import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from './Screens/Home';
import Main from './Screens/Main';
import KhachHang from './Screens/KhachHang';
import GanGoi from './Screens/GanGoi';


const Stack = createStackNavigator();

export default class App extends React.Component {
render(){
  return (
     <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Main" component={Main}/>
          <Stack.Screen name="GanGoi" component={GanGoi} />   
          <Stack.Screen name="KhachHang" component={KhachHang} />        
      </Stack.Navigator>
     </NavigationContainer>    
  );
}
};
