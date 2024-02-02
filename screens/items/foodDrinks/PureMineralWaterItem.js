{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function PureMineralWaterItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pure Mineral Water Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Pure Mineral Water is a beverage that can be scavenged from many various locations and can often be found inside Water Cooler Bottles. It can also be obtained by crafting it after reading Wasteland Treasures Vol. 4. Drinking Pure Mineral Water will have a positive effect on your Stamina and Hydration. Pure Mineral Water gives 60 water and 15% stamina regen. Benefits of drinking this water over Bottled Water, is that it gives you a 15% Efficient Digestion boost for 5 minutes. Also cures Dysentery at 20%.</Text>

        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: 0</Text>
        <Text style={[styles.attList]}>Hydration: +60</Text>
        <Text style={[styles.attList]}>Stamina: 0</Text>
        <Text style={[styles.attList]}>Health: 0</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.buffListHeader]}>Buff:</Text>
        <Text style={[styles.buffList]}>Stamina Regen: +15%</Text>
        <Text style={[styles.buffList]}>Water and Food Loss: -15%</Text>
        <Text style={[styles.buffList]}>Duration: 06:00</Text>

        <Text style={[styles.cureListHeader]}>Cures:</Text>
        <Text style={[styles.cureList]}>Dysentery</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Coal</Text>
        <Text style={[styles.list]}>1 Water</Text>
        <Text style={[styles.list]}>1 Goldenrod Flower</Text>
        <Text style={[styles.list]}>1 Chrsanthemum Flower</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Wasteland Treasures Vol.4</Text>
      </ScrollView>
    );
  }

export default PureMineralWaterItem;