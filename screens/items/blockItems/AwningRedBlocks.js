{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AwningRedBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Awning Red Blocks Info</Text>

        <Text>Description:</Text>
        <Text>Awning Red Blocks is a craft-able building material that is easy to craft and cheap on resources, Due to its low strength it is fairly weak and will easily be destroyed by Zombies. It is not possible to melt, scrap or use a Awning Red Blocks as source of Combustible Fuel.</Text>

        <Text>Crafting:</Text>
        <Text>10 Cloth Fragments</Text>
      </View>
    );
  }

export default AwningRedBlocksItem;