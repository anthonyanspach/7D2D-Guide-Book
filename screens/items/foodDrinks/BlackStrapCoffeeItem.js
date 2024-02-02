{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function BlackstrapCoffeeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Blackstrap Coffee Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Blackstrap Coffee is a Beverage that can be brewed using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Drinking Blackstrap Coffee will add Blackstrap Coffee (Buff) for 6 minutes. This buff stacks for up to 18 minutes (3x Blackstrap Coffee). Requires Art of Mining Vol. 4 to craft.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: +24</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: 0</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +25%</Text>
        <Text style={[styles.buffList]}>Cold Resist: +10</Text>
        <Text style={[styles.buffList]}>Duration: 06:00</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Coffee Beans</Text>
        <Text style={[styles.list]}>1 Water</Text>
        <Text style={[styles.list]}>5 Gun Powder</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>The Art of Mining Vol.4</Text>
      </ScrollView>
    );
  }

export default BlackstrapCoffeeItem;