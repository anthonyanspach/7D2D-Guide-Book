{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function MenuInterfaceScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Menu Interface</Text>

        <Text style={[styles.textHeader]}>Player Statistics:</Text>
        <Text style={[styles.text]}>Player's statistics can mean a lot of things, but for the most part player stats means the player's Character Level, Health, Stamina, Fullness (Food), Hydration (Water), and Temperature (Feels Like).</Text>

        <Text style={[styles.text]}>You can see all of your stats in your Character Menu.</Text>

        <Text style={[styles.text]}>There are also other stats in the character menu. Zombie Kills, Player Kills, Deaths, KM Traveled, Items crafted, and Longest Life.</Text>

        <Text style={[styles.text]}>There is also a hidden stat known as Speed. Speed determines how fast a player can move, and it cannot be brought above 100% but can be brought lower by injury like a broken leg, or by a temperature status effect.</Text>

        <Text style={[styles.textHeader]}>Clothing:</Text>
        <Text style={[styles.text]}>Clothing affects a lot of aspects of the player, how much damage it reduces, or the change in temperature they cause, among other things.</Text>

        <Text style={[styles.text]}>Some armor will take the place of ordinary clothing, but Chest and Leg armor both have their own slots allowing players to wear Shirts and Pants.</Text>

        <Text style={[styles.text]}>Some armors come in sets and some don't, but there is no bonus for having a full set of armor, besides it looking very nice and similar to one another.</Text>


        <Text style={[styles.textHeader]}>Creative Menu:</Text>
        <Text style={[styles.text]}>Cheat mode must be activated in the game's menu options to allow the use of the creative menu.</Text>

        <Text style={[styles.text]}>The creative menu has every single item and block in the game.</Text>

        <Text style={[styles.text]}>To get different quality levels the player must click refresh.</Text>


        <Text style={[styles.textHeader]}>Map Menu:</Text>
        <Text style={[styles.text]}>The map is used often by players to know where they are, or set waypoints for their home, or places of interest.</Text>

        <Text style={[styles.text]}>Waypoints put on the map will show up on the player's compass.</Text>

        <Text style={[styles.text]}>If the player has a friend in their game and tracks them they will see them, and the direction they are looking on the map. If the player moves, they will also move in real-time on the map as well.</Text>
      </ScrollView>
    );
  }

export default MenuInterfaceScreen;