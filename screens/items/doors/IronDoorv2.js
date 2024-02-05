{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function IronDoorv2Item({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Door V2</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Iron Door V2 is a craft-able Door that has the ability to be locked by the player. it is one of the stronger doors in the game, because it is made of metal. You can also upgrade a Secure Wood Door to an Iron Door through the new upgrade process in A13. You can use an Upgrading tool and 10x Forged Iron to upgrade a Iron Door further along the upgrade path.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Forged Iron</Text>
      </ScrollView>
    );
  }

export default IronDoorv2Item;