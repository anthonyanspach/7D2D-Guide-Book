{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BrickPaverBlockItem({ navigation }) {
    return (
      <View>
        <Text>Brick Paver Block Info</Text>

        <Text>Description:</Text>
        <Text>Brick Paver Block is a fairly strong block in 7 Days to Die. It is a different style of Brick block, with all the same attributes. It is best destroyed with an Auger or Pickaxe You can make them by forging Clay Soil in a Forge.</Text>

        <Text>Crafting:</Text>
        <Text>10 Small Stone</Text>
        <Text>60 Clay Soil</Text>
      </View>
    );
  }

export default BrickPaverBlockItem;