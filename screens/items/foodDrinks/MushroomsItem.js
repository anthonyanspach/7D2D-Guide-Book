{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MushroomsItem({ navigation }) {
    return (
      <View>
        <Text>Mushroom Info</Text>

        <Text>Description:</Text>
        <Text>Mushrooms can be harvested from Mushroom Clumps found in Caves and on the walls of Caves. Eating Mushrooms will increase the Fullness of the player. They can be crafted into Mushroom Spore Seeds. To see growing methods see Mushroom Spore Seed.</Text>
      </View>
    );
  }

export default MushroomsItem;