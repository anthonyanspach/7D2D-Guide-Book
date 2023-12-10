{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FurnitureScreen({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>
        <Button title="Air Conditioner" onPress={() => navigation.navigate('AirConditionerItem')} />
        <Button title="Bedroll" onPress={() => navigation.navigate('BedrollItem')} />
        <Button title="Brass Faucet" onPress={() => navigation.navigate('BrassFaucetItem')} />
        <Button title="Washing Machine" onPress={() => navigation.navigate('WashingMachineItem')} />
      </View>
    );
  }

export default FurnitureScreen;