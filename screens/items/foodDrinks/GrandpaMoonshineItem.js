{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GrandpaMoonshineItem({ navigation }) {
    return (
      <View>
        <Text>Grandpa's Moonshine Info</Text>

        <Text>Description:</Text>
        <Text>Gives all melee damage a punch that will make them quake in their boots. Also increases fortitude, damage resistance and a bunch of other stuff.</Text>

        <Text>Unlike Beer it can only be crafted at a Campfire. Effects last 1 minute and have a more exaggerated visual distortion than Beer. After drinking the Status Effect of Grandpa's Moonshine (Buff) will appear in the lower right corner about the health bar.</Text>

        <Text>After consuming it, the player will gain incredible melee bonuses for 1 minute. These bonuses are so potent, that it is possible to be on the ground and fight off an entire late-game Blood Moon Horde if you have enough of Grandpa's Moonshine.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +60%</Text>
        <Text>Melee Damage: +400%</Text>
        <Text>Stun Resist: +100%</Text>
        <Text>Health/sec: +20</Text>
        <Text>Duration: 01:00</Text>

        <Text>Crafting:</Text>
        <Text>1 Corn Meal</Text>
        <Text>1 Beer</Text>
        <Text>5 Blueberries</Text>
        <Text>1 Bottle of Acid</Text>
        <Text>1 Ear of Super Corn</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default GrandpaMoonshineItem;