{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function GarageDoorMetalItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Garage Door Metal Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Garage Door Metal is a craft-able Door that has the ability to be locked by the player. It is 3 blocks wide, making it ideal for a front gate, or a Minibike garage. The front of Traders outposts are locked with these doors. It is one of the stronger doors in the game, because it is made of metal. You can use an Upgrading tool and 10x Forged Iron to upgrade a Garage Door Metal further along the upgrade path.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>240 Scrap Iron</Text>
        <Text style={[styles.list]}>6 Springs</Text>
        <Text style={[styles.list]}>12 Mechanical Parts</Text>
      </ScrollView>
    );
  }

export default GarageDoorMetalItem;