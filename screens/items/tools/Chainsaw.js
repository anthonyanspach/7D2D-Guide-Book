{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ChainsawItem() {
    return (
      <View>
        <Text>Chainsaw info</Text>

        <Text>Description:</Text>
        <Text>The Chainsaw is a multipurpose item that can be used as a tool (for rapidly destroying wood blocks/trees) and for short range melee attacks. It's similar to the Auger but more efficient against wooden blocks.</Text>

        <Text>Uses:</Text>
        <Text>The Chainsaw needs Gas Cans to fuel it. To refuel the Chainsaw, Press "R" with the Chainsaw selected, and with a Gas Can in your inventory. This takes a few seconds to refill.</Text>
        <Text>A Chainsaw will increase the amount of materials that you receive from harvesting, but it will be slow when used against anything but wood. As of Alpha 19, it will provide a small amount of Raw Meat when used to butcher an animal carcass, but minimal other resources. Prior to Alpha 19, it would give no items when used to butcher an animal, but it would destroy the carcass quickly.</Text>
        <Text>As a weapon, the Chainsaw is extremely effective on single zombies due to its rapid attacks being able to largely prevent the zombies from attacking the survivor, but its short range and speed penalty while using it makes it quite ineffective on multiple zombies.</Text>

        <Text>Crafting:</Text>
        <Text>5 Motor Tools Parts</Text>
        <Text>1 Bicycle Handlebars</Text>
        <Text>1 Engine</Text>
        <Text>50 Forged Steel</Text>

        <Text>Unlock Options:</Text>
        <Text>Tools Digest</Text>
      </View>
    );
  }

export default ChainsawItem;