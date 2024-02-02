{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function CoffeeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Coffee Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Coffee is a Beverage that can be brewed using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Coffee activates the buff Caffeine Buzz, which increases stamina regeneration by 20% per second and increase hypothermal Resist by 5.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: +24</Text>
        <Text style={[styles.attList]}>Stamina: +10</Text>
        <Text style={[styles.attList]}>Health: 0</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +20%</Text>
        <Text style={[styles.buffList]}>Cold Resist: +5</Text>
        <Text style={[styles.buffList]}>Duration: 03:00</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Coffee Beans</Text>
        <Text style={[styles.list]}>1 Water</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default CoffeeItem;