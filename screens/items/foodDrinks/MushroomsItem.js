{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function MushroomsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Mushroom Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Mushrooms can be harvested from Mushroom Clumps found in Caves and on the walls of Caves. Eating Mushrooms will increase the Fullness of the player. They can be crafted into Mushroom Spore Seeds. To see growing methods see Mushroom Spore Seed.</Text>
      </ScrollView>
    );
  }

export default MushroomsItem;