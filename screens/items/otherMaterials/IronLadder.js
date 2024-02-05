{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function IronLadderItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Ladder Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Iron Ladders are craft-able items. They are much more sturdy than Wooden Ladders. To use, simply walk or jump towards the Iron Ladder and continue walking forward to climb. While on the ladder, you can move forward or backward depending on the direction you're facing. For example, you can "climb" a ladder by looking up and pressing the forward-movement key, or by looking down and pressing the backward-movement key.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Forged Iron</Text>
      </ScrollView>
    );
  }

export default IronLadderItem;