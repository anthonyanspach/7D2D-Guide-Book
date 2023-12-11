{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RiflesScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Pipe Rifle" onPress={() => navigation.navigate('PipeRifleItem')} />
        <Button title="Hunting Rifle" onPress={() => navigation.navigate('HuntingRifleItem')} />
        <Button title="Lever-Action Rifle" onPress={() => navigation.navigate('LeverActionRifleItem')} />
        <Button title="Sniper Rifle" onPress={() => navigation.navigate('SniperRifleItem')} />
      </View>
    );
  }

export default RiflesScreen;