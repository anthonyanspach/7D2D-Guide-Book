{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ExplodingArrowItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Exploding Arrow Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Exploding Arrows are an Explosive type of Ammunition used by Bows. In order to equip arrows, hold the reload key while the bow is equipped. Select the ammunition type in the shown radial menu.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Steel Arrowhead</Text>
        <Text style={[styles.list]}>2 Scrap Polymers</Text>
        <Text style={[styles.list]}>6 Gun Powder</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Ranger's Guide to Archery Vol.2</Text>
      </ScrollView>
    );
  }

export default ExplodingArrowItem;