{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ShirtsScreen({ navigation }) {
    return (
      <View>
        <Text>Shirts Categories</Text>
        <Button title="BDU Top" onPress={() => navigation.navigate('BDUTopItem')} />
        <Button title="Hazmat Shirt" onPress={() => navigation.navigate('HazmatShirtItem')} />
        <Button title="Hooded Sweatshirt" onPress={() => navigation.navigate('HoodedSweatshirtItem')} />
        <Button title="Flannel Shirt" onPress={() => navigation.navigate('FlannelShirtItem')} />
        <Button title="Plant Fiber Shirt" onPress={() => navigation.navigate('PlantFiberShirtItem')} />
        <Button title="Shirt" onPress={() => navigation.navigate('ShirtItem')} />
        <Button title="Sweatshirt" onPress={() => navigation.navigate('SweatshirtItem')} />
        <Button title="Tank Top" onPress={() => navigation.navigate('TankTopItem')} />
        <Button title="T Shirt" onPress={() => navigation.navigate('TShirtItem')} />
      </View>
    );
  }

export default ShirtsScreen;