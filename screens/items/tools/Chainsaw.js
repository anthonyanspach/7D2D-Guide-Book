{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function ChainsawItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Chainsaw info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Chainsaw is a multipurpose item that can be used as a tool (for rapidly destroying wood blocks/trees) and for short range melee attacks. It's similar to the Auger but more efficient against wooden blocks.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>The Chainsaw needs Gas Cans to fuel it. To refuel the Chainsaw, Press "R" with the Chainsaw selected, and with a Gas Can in your inventory. This takes a few seconds to refill.</Text>
        <Text style={[styles.text]}>A Chainsaw will increase the amount of materials that you receive from harvesting, but it will be slow when used against anything but wood. As of Alpha 19, it will provide a small amount of Raw Meat when used to butcher an animal carcass, but minimal other resources. Prior to Alpha 19, it would give no items when used to butcher an animal, but it would destroy the carcass quickly.</Text>
        <Text style={[styles.text]}>As a weapon, the Chainsaw is extremely effective on single zombies due to its rapid attacks being able to largely prevent the zombies from attacking the survivor, but its short range and speed penalty while using it makes it quite ineffective on multiple zombies.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Motor Tools Parts</Text>
        <Text style={[styles.list]}>1 Bicycle Handlebars</Text>
        <Text style={[styles.list]}>1 Engine</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tools Digest</Text>
      </ScrollView>
    );
  }

export default ChainsawItem;