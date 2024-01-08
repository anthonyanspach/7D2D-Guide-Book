{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CementItem({ navigation }) {
    return (
      <View>
        <Text>Cement Info</Text>

        <Text>Description:</Text>
        <Text>Cement is a craft-able ingredient that is used to craft Concrete Mix and Stone. It can also be harvested from Pallets that have blue cement bags on them. Shovels harvest these pallets quite quickly. Pallets in Point of Interest will respawn if a Quest resets that Point Of Interest. This can be used to gather fairly substantial quantities of cement from some warehouses, factories, and construction sites.</Text>

        <Text>Crafting:</Text>
        <Text>10 Small Stone</Text>
      </View>
    );
  }

export default CementItem;