{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PumpkinCheeseCakeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pumpkin Cheese Cake Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Pumpkin Cheesecake is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Pumpkin Cheesecake will have a positive effect on Fullness, Stamina, and Health. Consuming Pumpkin Cheesecake will give the player a +5% Bartering buff that lasts 5 minutes. Unlike most other buffs to bartering this only affects buying items rather than both buying and selling.</Text>


        <Text style={[styles.attListHeader]}>Attributes:</Text>
        <Text style={[styles.attList]}>Fullness: +42</Text>
        <Text style={[styles.attList]}>Hydration: 0</Text>
        <Text style={[styles.attList]}>Stamina: +20</Text>
        <Text style={[styles.attList]}>Health: +21</Text>
        <Text style={[styles.attList]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Pumpkin</Text>
        <Text style={[styles.list]}>1 Egg</Text>
        <Text style={[styles.list]}>1 Corn Meal</Text>
        <Text style={[styles.list]}>1 Animal Fat</Text>
        <Text style={[styles.list]}>1 Beer</Text>

        <Text style={[styles.needListHeader]}>Needed:</Text>
        <Text style={[styles.needList]}>Cooking Pot</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default PumpkinCheeseCakeItem;