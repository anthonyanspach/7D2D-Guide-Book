{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronBarsItem({ navigation }) {
    return (
      <View>
        <Text>Iron Bars Info</Text>

        <Text>Description:</Text>
        <Text>Iron Bars is a strong block in 7 Days to Die. It's great for windows or cages as you can shoot through them. Caution should be exercised as projectile attacks from Infected Police Officer will allow their puke attacks to pass through the Iron Bars injuring your character. It can be placed at many different angles which makes it versatile in building as well. It is best destroyed with an Auger or Pickaxe.</Text>

        <Text>Crafting:</Text>
        <Text>100 Iron</Text>
        <Text>20 Clay Soil</Text>
      </View>
    );
  }

export default IronBarsItem;