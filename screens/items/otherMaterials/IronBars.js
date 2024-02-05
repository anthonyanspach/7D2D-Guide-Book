{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function IronBarsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Bars Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Iron Bars is a strong block in 7 Days to Die. It's great for windows or cages as you can shoot through them. Caution should be exercised as projectile attacks from Infected Police Officer will allow their puke attacks to pass through the Iron Bars injuring your character. It can be placed at many different angles which makes it versatile in building as well. It is best destroyed with an Auger or Pickaxe.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>100 Iron</Text>
        <Text style={[styles.list]}>20 Clay Soil</Text>
      </ScrollView>
    );
  }

export default IronBarsItem;