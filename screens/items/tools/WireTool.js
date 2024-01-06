{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WireToolItem() {
    return (
      <View>
        <Text>Wire Tool info</Text>

        <Text>Description:</Text>
        <Text>A wire tool is used to wire electrical components. Focus on any electrical component and use the secondary action to add a wire to a parent and once again to complete the connection to a child component. Focus on any electrical component and use the primary action to remove or cut that components wire to its parent component. With the wire tool equipped you can see many useful things including: a components power usage and power status, the flow of power from parent to its child component and the aiming of objects with motion sensing.</Text>

        <Text>Crafting:</Text>
        <Text>9 Forged Steel</Text>
        <Text>3 Machnical Parts</Text>
      </View>
    );
  }

export default WireToolItem;