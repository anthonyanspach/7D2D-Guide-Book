{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StairsScreen({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>
        <Button title="Brick Stairs" onPress={() => navigation.navigate('BrickStairsItem')} />
        <Button title="Cobblestone Stairs" onPress={() => navigation.navigate('CobblestoneStairsItem')} />
        <Button title="Concrete Stairs" onPress={() => navigation.navigate('ConcreteStairsItem')} />
        <Button title="Flagstone Stairs" onPress={() => navigation.navigate('FlagstoneStairsItem')} />
        <Button title="Reinforced Scrap Iron Stairs" onPress={() => navigation.navigate('ReinforcedScrapIronStairsItem')} />
        <Button title="Steel Stairs" onPress={() => navigation.navigate('SteelStairsItem')} />
        <Button title="Wooden Stairs" onPress={() => navigation.navigate('WoodenStairsItem')} />
      </View>
    );
  }

export default StairsScreen;