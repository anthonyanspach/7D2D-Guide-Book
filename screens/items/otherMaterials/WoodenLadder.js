{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function WoodenLadderItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wooden Ladder Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Wooden Ladder is a craftable item. It can also be "looted" by hitting an existing Wooden Ladder with a Fireaxe until it disappears and a Wooden Ladder is added to your inventory.</Text>

        <Text style={[styles.text]}>To use, simply walk or jump towards the Wooden Ladder and continue walking forward to climb. While on the ladder, you can move forward or backward depending on the direction you're facing. For example, you can "climb" a ladder by looking up and pressing the forward-movement key, or by looking down and pressing the backward-movement key.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>3 Wood</Text>
      </ScrollView>
    );
  }

export default WoodenLadderItem;