{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function HealthSystemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Health Mechanics</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Health is one of the main Player Statistics. A player's current health status is represented by a red horizontal bar at the bottom-left corner of the player's screen. The maximum Health is determined by the Max Health of the player. Max Health is limited by the Max Health Cap. Reaching a Health of zero results in Death.</Text>

        <Text style={[styles.text]}>A player must actively maintain his Health through the use of Food and Medical Supplies. For example, failing to drink or eat will result in thirst and hunger, which if left unchecked, will eventually result in losing Health and ultimately in death. Eating or drinking the wrong thing, such as Raw Meat or Bottled Murky Water can result in Dysentery, which can also reduce a player's health to zero, resulting in death.</Text>

        <Text style={[styles.text]}>Health and Max Health can be restored by consuming certain Food items or by using Medical supplies such as Painkillers.</Text>

        <Text style={[styles.textHeader]}>Health Depletion:</Text>
        <Text style={[styles.text]}>A player can lose Health by receiving damage from hits by Zombies or other players, falling from heights, splash damage from explosions, drowning, and falling blocks. The types of damaged received are as follows:</Text>


        <Text style={[styles.textHeader]}>Zombie Damage:</Text>
        <Text style={[styles.text]}>The amount of damage depends on the type of Zombie, with the stronger zombies delivering more damage per hit.</Text>

        <Text style={[styles.text]}>Damage dealt to the player is also affected by the level of the player, the amount of armor and what kind they are wearing, as well as the quality level of the armor.</Text>

        <Text style={[styles.text]}>Damage dealt to the player from zombies is also affected by the current game difficulty of the world. Please see Difficulty for further information.</Text>

        <Text style={[styles.text]}>Furthermore, there is a small chance every time the player gets hit, a de-buff could be acquired leaving the player with a negative status effect. These can vary from being Stunned, Bleeding, and/or Infection, with the latter two capable of killing a player if not treated.</Text>


        <Text style={[styles.textHeader]}>Fall Damage:</Text>
        <Text style={[styles.text]}>Falling from a height will deplete a player's Health with the amount lost proportionately to the height of the fall. Falling from a great height will result in a high loss of Health or even death.</Text>

        <Text style={[styles.text]}>There is also the possibility of a (Sprained Leg or Broken Leg) incurred during the landing. Leg injuries reduce movement speed and may require the use of a Splint. Although a splint is not required (or not usable, in later versions) for a sprain, it will decrease the time required to heal a sprained leg and will also help protect against breaking the leg.</Text>

        <Text style={[styles.text]}>A Hay Bale, an area of at least two blocks deep water or a pile of zombie remains, will break the fall and prevent damage from any height.</Text>


        <Text style={[styles.textHeader]}>Weapon Damage:</Text>
        <Text style={[styles.text]}>All Weapons can inflict damage, with varying levels delivered depending upon the Weapon used, the quality of the weapon, what kind of ammo, and various skill levels of the player using the weapon.</Text>

        <Text style={[styles.text]}>Some Weapons are fairly weak and will take a small amount of Health per hit. Others, especially some firearms, are powerful enough to kill a player with a single hit.</Text>


        <Text style={[styles.textHeader]}>Splash Damage:</Text>
        <Text style={[styles.text]}>This is caused when a player is caught within the blast radius of an explosion. The severity of the damage received is reduced the further away the player is from the source of the explosion.</Text>


        <Text style={[styles.textHeader]}>Drowning:</Text>
        <Text style={[styles.text]}>Drowning occurs when the player spends too much time underwater. At this point the player's character can no longer breathe and will start to suffocate, twenty seconds later they will start to drown. Drowning will quickly deplete the health bar and will ultimately kill the player if they do not resurface for air in time.</Text>


        <Text style={[styles.textHeader]}>Negative Status Effects:</Text>
        <Text style={[styles.text]}>A character can also lose Health as the result of a negative status effect caused by a de-buff. However, rather than taking a set value per hit a de-buff usually drains Health over a period of time.</Text>


        <Text style={[styles.textHeader]}>Health Restoration:</Text>
        <Text style={[styles.text]}>Natural healing occurs when a character eats. Different food items restore different amounts of fullness. Some medical supplies and positive status effects also restore the player's health.</Text>

        <Text style={[styles.text]}>Many food items will restore small amounts of health when consumed.</Text>

        <Text style={[styles.text]}>There are a number of medical supplies available through looting, crafting and cooking. Although function and effectiveness vary, each item is useful in some way in maintaining or improving a character's health.</Text>

        <Text style={[styles.text]}>A player can also gain Health as a result of positive status effects caused by a buff. The effects of a buff usually increase Health over a period of time.</Text>


        <Text style={[styles.textHeader]}>Increasing Max Health:</Text>
        <Text style={[styles.text]}>You need to increase your Character Level each level gives 1 health and caps at 200. Having someone with the Charismatic Nature perk at level 1 is around you, you get an extra 20 health on top of your current health. In alpha 19 and beyond you can get health bars Candy from vending machines to give another 10 health.</Text>
      </ScrollView>
    );
  }

export default HealthSystemScreen;