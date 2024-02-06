{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function SurvivalScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Survival Mechanics</Text>

        <Text style={[styles.textHeader]}>Day and Night</Text>
        <Text style={[styles.text]}>Day and night settings can be defined by the player on the menu before starting a game.</Text>

        <Text style={[styles.text]}>You can change how many in-game hours there are in each day (12, 14, 16, or 18 hours in each in-game day). The sun will always set at 22:00 and rise at either 4:00, 6:00, 8:00, or 10:00.</Text>

        <Text style={[styles.text]}>You can change how long a 24-hour cycle lasts (10, 20, 30, 40, 50, 60, 90, or 120 minutes in real-time). The duration of a 24-hour cycle not only affects how long a day lasts but how long a night lasts too.</Text>

        <Text style={[styles.text]}>Both day and night time have an effect on zombies. During the day almost every zombie type cannot run (some exceptions include Feral Wight and the Zombie Dog). During the nighttime, every zombie can run. This can be modified (plus the run speeds) on the menu.</Text>

        <Text style={[styles.text]}>Time of day or night does not affect how the player obtains experience, loot, or any other variable besides how bright or dark the world is and if the zombies are allowed to run or not.</Text>


        <Text style={[styles.textHeader]}>Temperature:</Text>
        <Text style={[styles.text]}>Every player has their own temperature and it can be affected by clothing, their surroundings, the weather, and more.</Text>

        <Text style={[styles.text]}>Temperature cannot give the player any positive effects, it can only give neutral and negative effects.</Text>

        <Text style={[styles.text]}>If the player does not stay between 31°F and 99°F (-0.5°C to 37°C) and goes below or beyond these temperatures they will start to be affected with Status Effects that will negatively affect the player's fullness (hunger), hydration (thirst), health, stamina, and Speed. If the temperature is not kept to a suitable level the player will die.</Text>

        <Text style={[styles.text]}>Biome has an effect on temperature. The burnt forest is generally hot and the snowy forest is generally cold. The forest defaults to a suitable temperature.</Text>

        <Text style={[styles.text]}>Standing near other players will not increase your temperature.</Text>


        <Text style={[styles.textHeader]}>Wet:</Text>
        <Text style={[styles.text]}>Swimming in water, being outside in the rain (or snow), or against an open window inside a building while it is raining or snowing can cause the player to get wet.</Text>

        <Text style={[styles.text]}>Your temperature will always decrease while you are wet.</Text>

        <Text style={[styles.text]}>A Campfire will not dry you but will keep your temperature up.</Text>

        <Text style={[styles.text]}>To lose wetness the player must stay out of water for a period of time.</Text>

        <Text style={[styles.text]}>Wearing clothing reduces this effect.</Text>
      </ScrollView>
    );
  }

export default SurvivalScreen;