{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function MurkyWaterItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Murky Water Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Murky Water is a contaminated drink, although it will have a positive effect on your Hydration and Stamina, it can also have a 12% chance of contracting Dysentery. It is possible to purify Murky Water by boiling it, which will produce Water and is safe to drink with a 0% chance of Dysentery.</Text>

        <Text style={[styles.textHeader]}>Purification:</Text>
        <Text style={[styles.text]}>In order to purify Murky Water, you will need to use a Cooking Pot on a Campfire, with a source of Combustible fuel, and time at approximately 40 seconds or less. Boiling the Murky Water will purify it from 12% Dysentery to 0% changing it into Water.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: +10</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: -5</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 12%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +15%</Text>
      </ScrollView>
    );
  }

export default MurkyWaterItem;