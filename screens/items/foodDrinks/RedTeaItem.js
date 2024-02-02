{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function RedTeaItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Red Tea Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Red Tea is a Beverage that can be brewed using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Drinking Red Tea will have a positive effect on your Hydration and Stamina Regen. It gives 15% Efficient Digestion for 6 minutes.</Text>

        <Text style={[styles.text]}>Red Tea is especially useful in the early and mid game, as it not only grants an additional 4 Hydration, but its buff makes Fullness and Hydration drain 15% slower when regenerating Stamina. This makes one's food supplies last a bit longer, additionally saving Water for crafting Glue. Plus, Red Tea is easy to obtain; Chrysanthemum Flowers are abundant in the Forest and its recipe is unlocked early on in the Food skill progression.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: +24</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: 0</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +15%</Text>
        <Text style={[styles.buffList]}>Water and Food Loss: -15%</Text>
        <Text style={[styles.buffList]}>Duration: 06:00</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Chrysanthemum Flower</Text>
        <Text style={[styles.list]}>1 Water</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default RedTeaItem;