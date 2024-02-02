{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function BeerItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Beer Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Beer is a Beverage and drinking it will have a positive effect on the players Stamina, along with giving temporary stun immunity. This stun resist can be useful to prevent Concussions from occurring, especially if Painkillers to cure a Concussion are in short supply.</Text>

        <Text style={[styles.text]}>Beer gives you the buff Buzzed when you drink it which lasts for up to 1 minute. Drinking multiple Beers over a short period of time stacks the duration, with the maximum stack being four Beers. Buzzed gives you +2 Stamina per second. Beer can be crafted or bought from Traders.</Text>

        <Text style={[styles.text]}>Since Beer is crafted from completely renewable items (Water from a Dew Collector & Hops Flowers from farms) it can be used as a source of income. However with a selling price of 20 Dukes per item (200 per stack) it is not very efficient.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: 0</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +40%</Text>
        <Text style={[styles.buffList]}>Brawling Damage: +300%</Text>
        <Text style={[styles.buffList]}>Stun Resist: +100%</Text>
        <Text style={[styles.buffList]}>Duration: 01:00</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Hops Flower</Text>
        <Text style={[styles.list]}>1 Water</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Chemistry Station</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default BeerItem;