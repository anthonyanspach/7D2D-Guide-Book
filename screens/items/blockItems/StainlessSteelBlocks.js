{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function StainlessSteelBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Stainless Steel Block Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Stainless Steel Blocks are a craftable building material. They are the most durable building blocks in the game. They are created by upgrading Steel Blocks with ten (10) Steel Polish using any construction tool. However, the Steel Polish was removed from the game, so Stainless Steel Blocks are no longer craftable by players. When Stainless Steel Blocks degrade, they degrade into Reinforced Concrete Blocks, rather than Steel Blocks.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Steel Block</Text>
        <Text style={[styles.list]}>10 reinforced Steel Upgrade</Text>
      </ScrollView>
    );
  }

export default StainlessSteelBlocksItem;