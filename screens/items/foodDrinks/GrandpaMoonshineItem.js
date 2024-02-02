{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function GrandpaMoonshineItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Grandpa's Moonshine Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Gives all melee damage a punch that will make them quake in their boots. Also increases fortitude, damage resistance and a bunch of other stuff.</Text>

        <Text style={[styles.text]}>Unlike Beer it can only be crafted at a Campfire. Effects last 1 minute and have a more exaggerated visual distortion than Beer. After drinking the Status Effect of Grandpa's Moonshine (Buff) will appear in the lower right corner about the health bar.</Text>

        <Text style={[styles.text]}>After consuming it, the player will gain incredible melee bonuses for 1 minute. These bonuses are so potent, that it is possible to be on the ground and fight off an entire late-game Blood Moon Horde if you have enough of Grandpa's Moonshine.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: 0</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +60%</Text>
        <Text style={[styles.buffList]}>Melee Damage: +400%</Text>
        <Text style={[styles.buffList]}>Stun Resist: +100%</Text>
        <Text style={[styles.buffList]}>Health/sec: +20</Text>
        <Text style={[styles.buffList]}>Duration: 01:00</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Corn Meal</Text>
        <Text style={[styles.list]}>1 Beer</Text>
        <Text style={[styles.list]}>5 Blueberries</Text>
        <Text style={[styles.list]}>1 Bottle of Acid</Text>
        <Text style={[styles.list]}>1 Ear of Super Corn</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default GrandpaMoonshineItem;