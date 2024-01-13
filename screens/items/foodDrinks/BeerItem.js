{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BeerItem({ navigation }) {
    return (
      <View>
        <Text>Beer Info</Text>

        <Text>Description:</Text>
        <Text>Beer is a Beverage and drinking it will have a positive effect on the players Stamina, along with giving temporary stun immunity. This stun resist can be useful to prevent Concussions from occurring, especially if Painkillers to cure a Concussion are in short supply.</Text>

        <Text>Beer gives you the buff Buzzed when you drink it which lasts for up to 1 minute. Drinking multiple Beers over a short period of time stacks the duration, with the maximum stack being four Beers. Buzzed gives you +2 Stamina per second. Beer can be crafted or bought from Traders.</Text>

        <Text>Since Beer is crafted from completely renewable items (Water from a Dew Collector & Hops Flowers from farms) it can be used as a source of income. However with a selling price of 20 Dukes per item (200 per stack) it is not very efficient.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +40%</Text>
        <Text>Brawling Damage: +300%</Text>
        <Text>Stun Resist: +100%</Text>
        <Text>Duration: 01:00</Text>

        <Text>Crafting:</Text>
        <Text>4 Hops Flower</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Chemistry Station</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default BeerItem;