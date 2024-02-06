{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function CombatDamageScreen({ navigation }) {
    return (
      <ScrollView  style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Combat / Damage Mechanics</Text>

        <Text style={[styles.textHeader]}>Block Damage:</Text>
        <Text style={[styles.text]}>Block Damage determines how much damage a weapon or tool will do to a block.</Text>

        <Text style={[styles.text]}>Every weapon and tool lists how much damage it does to blocks. This damage is determined primarily by the item's Quality.</Text>


        <Text style={[styles.textHeader]}>Entity Damage:</Text>
        <Text style={[styles.text]}>Entity Damage determines how much damage a weapon or tool will do to a player, Zombie, or Animal.</Text>

        <Text style={[styles.text]}>Every weapon and tool lists how much damage it does to entities. This damage is determined primarily by the item's Quality.</Text>

        <Text style={[styles.textHeader]}>Stealth:</Text>
        <Text style={[styles.text]}>Stealth allows the player to be quieter, making it harder for zombies to hear the player's movements and actions.</Text>

        <Text style={[styles.text]}>When in stealth, actions like mining or looting are quieter.</Text>

        <Text style={[styles.text]}>The first attack done to a zombie while in stealth does extra damage. Any further attacks, even if the zombie did not detect the player attacking, will not result in increased damage.</Text>

        <Text style={[styles.text]}>Stealth cannot be used when creatures are already aware of you. This includes special events like the blood moon where a horde of zombies is triggered to attack you.</Text>


        <Text style={[styles.textHeader]}>Heatmap:</Text>
        <Text style={[styles.text]}>The heatmap is an invisible mechanic that controls zombie spawns around areas the players are most active.</Text>

        <Text style={[styles.text]}>There are a lot of things that can increase the heatmap: using firearms, explosives, or buildings like a forge or torch.</Text>

        <Text style={[styles.text]}>When the heatmap becomes very high, random screamers will start spawning and attempt to find the character. Usually, this results in a small horde once the screamer detects the player and screams.</Text>

        <Text style={[styles.text]}>Chopping trees, mining rocks, or digging up the ground also increases the heat map.</Text>

        <Text style={[styles.text]}>Small things like opening doors, jumping, falling more than one block, or standing in an area for a period of time can also increase the heat map.</Text>


        <Text style={[styles.textHeader]}>Dismemberment:</Text>
        <Text style={[styles.text]}>Dismemberment allows the player to dismember zombies and most animals by doing damage to their limbs and head.</Text>

        <Text style={[styles.text]}>Dismembering a certain body part has different effects on zombies.</Text>
      </ScrollView>
    );
  }

export default CombatDamageScreen;