{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AirConditionerItem({ navigation }) {
    return (
      <View>
        <Text>Air Conditioner Info</Text>

        <Text>Description:</Text>
        <Text>An Air Conditioner is a furniture item which can be found most commonly on rooftops, in an attic or directly beside a house. The Air Conditioners is a good source of brass as you may find a Brass Radiator.</Text>

        <Text>Dismantling:</Text>
        <Text>You can properly harvest parts from the Air Conditioner by using a Wrench. The higher the Quality of the Wrench the greater amount of parts that can be harvested.</Text>
        <Text>1-10 Iron</Text>
        <Text>3-7 Electrical Parts</Text>
        <Text>0-4 Mechanical Parts</Text>
        <Text>1-5 Short Iron Pipe</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default AirConditionerItem;