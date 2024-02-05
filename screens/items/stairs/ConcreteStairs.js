{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ConcreteStairsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Concrete Stairs Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Concrete Stairs are a craft-able building material that are easy to craft although the recipe requires Concrete, making Concrete Stairs more expensive on resources. Due to their reasonable strength, they will take a while to be destroyed by Zombies. Concrete Stairs cannot be dismantled, melted, scrapped or used as a source of Combustible Fuel. Concrete Stairs can be upgraded into Steel Stairs</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Concrete Mix</Text>
      </ScrollView>
    );
  }

export default ConcreteStairsItem;