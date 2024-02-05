{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity,ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function AnimalFatItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Animal Fat Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Animal Fat is an ingredient that is acquired by Harvesting Animals with a Bone Knife, Hunting Knife, or Machete. Animal Fat is used to cook into different foods at a Campfire. Eating Animal Fat will have a positive effect on Fullness but a negative one on Health.</Text>
      </ScrollView>
    );
  }

export default AnimalFatItem;