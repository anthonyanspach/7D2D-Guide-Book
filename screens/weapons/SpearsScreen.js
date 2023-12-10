{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WeaponsScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Stone Spear" onPress={() => navigation.navigate('StoneSpearItem')} />
        <Button title="Iron Spear" onPress={() => navigation.navigate('IronSpearItem')} />
        <Button title="Steel Spear" onPress={() => navigation.navigate('SteelSpearItem')} />
      </View>
    );
  }

export default WeaponsScreen;