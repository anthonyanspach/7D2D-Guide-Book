{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MailBoxItem({ navigation }) {
    return (
      <View>
        <Text>Mail Box Info</Text>

        <Text>Description:</Text>
        <Text>Mail Boxes can be found in Diersville near the houses. And can spawn in Random World Generation near houses as well.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default MailBoxItem;