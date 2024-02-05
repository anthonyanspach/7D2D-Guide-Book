{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function RawMeatItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Raw Meat Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Raw Meat is an edible food item; it is obtained by hunting wild animals. Eating Raw Meat will have a positive effect on Fullness but may also cause the player to get sick with Food Poisoning. It can be cooked for greater benefit using a Campfire and either a Cooking Grill or Cooking Pot to make various recipes. If neither of these cooking tools are available, one can cook the meat on the Campfire to created Charred Meat.</Text>
      </ScrollView>
    );
  }

export default RawMeatItem;