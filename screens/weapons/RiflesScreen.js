{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RiflesScreen({ navigation }) {
    return (
      <View>
        <Text>Rifles</Text>

        <Text>Description:</Text>
        <Text>Rifles are covered under the perk Dead Eye. They offer the longest range a weapon has with a high damage per bullet. At the downside is the slow attack speed and small magazine capacity.</Text>
        
        <Button title="Pipe Rifle" onPress={() => navigation.navigate('PipeRifleItem')} />
        <Button title="Hunting Rifle" onPress={() => navigation.navigate('HuntingRifleItem')} />
        <Button title="Lever-Action Rifle" onPress={() => navigation.navigate('LeverActionRifleItem')} />
        <Button title="Sniper Rifle" onPress={() => navigation.navigate('SniperRifleItem')} />
      </View>
    );
  }

export default RiflesScreen;