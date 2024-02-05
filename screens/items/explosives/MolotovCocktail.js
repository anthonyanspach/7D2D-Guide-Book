{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function MolotocCocktailItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Molotov Cocktail Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Molotov Cocktail is a throwable weapon good for damaging groups of Zombies or other players.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Cloth Fragments</Text>
        <Text style={[styles.list]}>300 Gas Cans</Text>
        <Text style={[styles.list]}>1 Oil</Text>
      </ScrollView>
    );
  }

export default MolotocCocktailItem;