{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function LevelingSystemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Leveling Mechanics</Text>

        <Text style={[styles.textHeader]}>Character Level:</Text>
        <Text style={[styles.text]}>Every player has their own level, which is increased by gaining experience points (XP).</Text>

        <Text style={[styles.text]}>Players can see their progress towards the next level by checking the experience bar located just above the Toolbelt.</Text>

        <Text style={[styles.text]}>Most activities give XP. Killing zombies, crafting, looting, and mining all provide XP.</Text>

        <Text style={[styles.text]}>Tools, weapons, and clothing do not have a minimum character level to use.</Text>

        <Text style={[styles.text]}>Every level gives the character one point to spend on Skills. Four points are received from finishing the starting quest.</Text>


        <Text style={[styles.textHeader]}>Perks:</Text>
        <Text style={[styles.text]}>Perks can be leveled by use of the skill points.</Text>

        <Text style={[styles.text]}>Each perk has up to 5 levels, each requiring a certain level of the parent Attribute Skill.</Text>

        <Text style={[styles.text]}>Players can level certain perks to increase damage with weapons, or increase effectiveness with tools.</Text>

        <Text style={[styles.text]}>The player's crafting skill determines the tier of the items they craft; this controls the item's stats such as durability and damage.</Text>
      </ScrollView>
    );
  }

export default LevelingSystemScreen;