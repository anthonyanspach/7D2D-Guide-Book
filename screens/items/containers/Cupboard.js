{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CupboardItem({ navigation }) {
    return (
      <View>
        <Text>Cupboard Info</Text>

        <Text>Description:</Text>
        <Text>Cupboards are containers for storage. Cupboards can be found in every house in the city.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default CupboardItem;