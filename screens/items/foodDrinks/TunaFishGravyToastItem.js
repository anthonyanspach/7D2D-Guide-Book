{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function TunaFishGravyToastItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Tuna Fish Gravy Toast Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Tuna Fish Gravy Toast is a late-game food item. Eating Tuna Fish Gravy Toast will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +90</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: +40</Text>
        <Text style={[styles.attList]}>Health: +45</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Can of Tuna</Text>
        <Text style={[styles.list]}>1 Corn Meal</Text>
        <Text style={[styles.list]}>2 Corn Bread</Text>
        <Text style={[styles.list]}>3 Animal Fat</Text>
        <Text style={[styles.list]}>1 Can of Peas</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default TunaFishGravyToastItem;