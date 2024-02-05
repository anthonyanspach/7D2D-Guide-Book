{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function WoodBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wood Block Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Wood Blocks are a craftable building material that is somewhat durable. They are upgraded from Wood Frames and can be upgraded into Cobblestone Blocks. Wood is an early game material that is found in abundance. These blocks are also very quick to craft. This makes it an excellent choice for an early game shelter. It will not be able to survive sustained damage as well as Cobblestone Blocks. It is recommended to upgrade structures that are vulnerable to Zombie attack when possible. This is especially true for any structure you plan on facing a Blood Moon Horde in.</Text>

        <Text style={[styles.text]}>To place the many varieties of Wood Blocks available you must craft Wood Shapes. The default shape is a solid cube. To change the shape that is being placed put the Wood Shapes in your hotbar, select them so you are holding them in your hand, hold R, and then select the shapes menu. This will bring up the Shapes interface for selecting which block will be placed. There are a huge number of different shaped blocks available. Some examples include: the standard cube, ramps, stairs, posts, and partial blocks.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Wood</Text>
      </ScrollView>
    );
  }

export default WoodBlocksItem;