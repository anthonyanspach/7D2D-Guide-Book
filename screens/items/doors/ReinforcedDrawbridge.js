{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ReinforcedDrawbridgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Reinforced Drawbridge Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Reinforced Drawbridge is a craftable Drawbridge that has the ability to be raised or lowered by the player. This creates many exciting opportunities for base construction and defense. The Reinforced Drawbridge is now five blocks wide and six blocks long when lowered, excluding the blocks that support the base.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>100 Forged Iron</Text>
        <Text style={[styles.list]}>2000 Wood</Text>
        <Text style={[styles.list]}>20 Springs</Text>
        <Text style={[styles.list]}>30 Mechanical Parts</Text>
      </ScrollView>
    );
  }

export default ReinforcedDrawbridgeItem;