{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function WorkstationsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Clubs</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Clubs and bats are covered under the perk Pummel Pete. They offer a balance between attack speed and damage. Sledgehammers are covered under the perk Skull Crusher. They, on the other hand, deal the most melee damage of all weapons in a single hit, but trade the power to the very slow attack speed. One misplaced hit could cost the player their life.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('WoodenClubItem')} >

          <Text style={[styles.buttonText]}>Wooden Club</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('CandyCaneClubItem')} >

          <Text style={[styles.buttonText]}>Candy Cane Club</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('SteelClubItem')} >

          <Text style={[styles.buttonText]}>Steel Club</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('BaseballBatItem')} >

          <Text style={[styles.buttonText]}>Baseball Bat</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default WorkstationsScreen;