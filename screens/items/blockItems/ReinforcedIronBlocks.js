{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function ReinforcedIronBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Reinforced Iron Block Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Reinforced Iron Blocks is the upgraded version of Iron Blocks. It can not be crafted using other materials, the only ways to obtain a Reinforced Iron Blocks are through upgrading Iron Blocks or using the Creative Menu. It is not possible to dismantle, scrap or use a Reinforced Iron Blocks as fuel. You can not destroy a Reinforced Iron Blocks, as such because it will simply downgrade at what would be its point of destruction.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Iron Block</Text>
        <Text style={[styles.list]}>40 Iron</Text>
      </ScrollView>
    );
  }

export default ReinforcedIronBlocksItem;