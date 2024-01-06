{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AsphaltItem({ navigation }) {
    return (
      <View>
        <Text>Asphalt Info</Text>

        <Text>Description:</Text>
        <Text>Asphalt is a craftable building material commonly found in roads & streets. It can be crafted using the Cement Mixer.</Text>

        <Text>Crafting:</Text>
        <Text>8 Crushed Sand</Text>
        <Text>17 Small Stone</Text>
        <Text>5 Oil Shale</Text>
      </View>
    );
  }

export default AsphaltItem;