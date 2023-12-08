{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function GlassesScreen({ navigation }) {
    return (
      <View>
        <Text>Glasses Screen</Text>
        <Button title="Lucky Goggles" onPress={() => navigation.navigate('LuckyGogglesItem')} />
        <Button title="Ski Goggles" onPress={() => navigation.navigate('SkiGogglesItem')} />
        <Button title="Nerdy Glasses" onPress={() => navigation.navigate('NerdyGlassesItem')} />
        <Button title="Night Vision Goggles" onPress={() => navigation.navigate('NightVisionGogglesItem')} />
        <Button title="Shades" onPress={() => navigation.navigate('ShadesItem')} />
        <Button title="Tough Guy Sunglasses" onPress={() => navigation.navigate('ToughGuySunglassesItem')} />
      </View>
    );
  }

export default GlassesScreen;