{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function GarageDoorMetalv2Item({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Garage Door Metal V2</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Garage Door Metal v2 is an upgrade Door that has the ability to be locked by the player. It is 3 blocks wide, making it ideal for a front gate, or a Minibike garage. The front of Traders outposts are locked with these doors. It is one of the stronger doors in the game, because it is made of metal.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>Unknown</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Unknown</Text>
      </ScrollView>
    );
  }

export default GarageDoorMetalv2Item;