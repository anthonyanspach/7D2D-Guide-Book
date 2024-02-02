{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function CharredMeatItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Charred Meat Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Charred Meat is a Food item that can be cooked using a Campfire with a suitable source of Combustible fuel. Eating Charred Meat will have a positive effect on Fullness, Stamina, and Health as well as a negative effect on Hydration.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +10</Text>
        <Text style={[styles.attList]}>Hydration: -5</Text>
        <Text style={[styles.attList]}>Stamina: +10</Text>
        <Text style={[styles.attList]}>Health: +5</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Raw Meat</Text>
      </ScrollView>
    );
  }

export default CharredMeatItem;