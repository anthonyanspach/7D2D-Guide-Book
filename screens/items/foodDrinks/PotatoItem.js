{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PotatoItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Potato Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Potato is a food item which can be harvested from the Potato Plant. Eating a Potato will have a positive effect on Fullness. They can be used to create Potato Seeds which will enable the player to Farm their own Potato Plants. A Potato can also be used as an ingredient in various recipes.</Text>
      </ScrollView>
    );
  }

export default PotatoItem;