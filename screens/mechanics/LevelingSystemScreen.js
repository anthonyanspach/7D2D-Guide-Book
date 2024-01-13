{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function LevelingSystemScreen({ navigation }) {
    return (
      <View>
        <Text>Leveling Mechanics</Text>

        <Text>Character Level:</Text>
        <Text>Every player has their own level, which is increased by gaining experience points (XP).</Text>

        <Text>Players can see their progress towards the next level by checking the experience bar located just above the Toolbelt.</Text>

        <Text>Most activities give XP. Killing zombies, crafting, looting, and mining all provide XP.</Text>

        <Text>Tools, weapons, and clothing do not have a minimum character level to use.</Text>

        <Text>Every level gives the character one point to spend on Skills. Four points are received from finishing the starting quest.</Text>


        <Text>Perks:</Text>
        <Text>Perks can be leveled by use of the skill points.</Text>

        <Text>Each perk has up to 5 levels, each requiring a certain level of the parent Attribute Skill.</Text>

        <Text>Players can level certain perks to increase damage with weapons, or increase effectiveness with tools.</Text>

        <Text>The player's crafting skill determines the tier of the items they craft; this controls the item's stats such as durability and damage.</Text>
      </View>
    );
  }

export default LevelingSystemScreen;