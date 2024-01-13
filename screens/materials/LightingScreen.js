{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function LightingScreen({ navigation }) {
    return (
      <View>
        <Text>Lighting Items</Text>
        
        <Button title="Basic Light Bulb" onPress={() => navigation.navigate('BasicLightBulbItem')} />
        <Button title="Burning Barrel" onPress={() => navigation.navigate('BurningBarrelItem')} />
        <Button title="Candle" onPress={() => navigation.navigate('CandleItem')} />
        <Button title="Old Outdoor Light" onPress={() => navigation.navigate('OldOutdoorLightItem')} />
      </View>
    );
  }

export default LightingScreen;