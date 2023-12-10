{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BlockItemsScreen({ navigation }) {
    return (
      <View>
        <Text>Campfire Item</Text>
        <Button title="Awning Red Blocks" onPress={() => navigation.navigate('AwningRedBlocksItem')} />
        <Button title="Brick Blocks" onPress={() => navigation.navigate('BrickBlocksItem')} />
        <Button title="Clay Roof Blocks" onPress={() => navigation.navigate('ClayRoofBlocksItem')} />
        <Button title="Cobblestone Blocks" onPress={() => navigation.navigate('CobblestoneBlocksItem')} />
        <Button title="Concrete Blocks" onPress={() => navigation.navigate('ConcreteBlocksItem')} />
        <Button title="Concrete Form Blocks" onPress={() => navigation.navigate('ConcreteFormBlocksItem')} />
        <Button title="Land Claim Block" onPress={() => navigation.navigate('LandClaimBlocksItem')} />
        <Button title="Metal Reinforced Wood Block" onPress={() => navigation.navigate('MetalReinforcedWoodBlocksItem')} />
        <Button title="Metal Trussing" onPress={() => navigation.navigate('MetalTrussingItem')} />
        <Button title="Poured Reinforced Concrete Blocks" onPress={() => navigation.navigate('PouredReinforcedConcreteBlocksItem')} />
        <Button title="Reinforced Iron Blocks" onPress={() => navigation.navigate('ReinforcedIronBlocksItem')} />
        <Button title="Stainless Steel Blocks" onPress={() => navigation.navigate('StainlessSteelBlocksItem')} />
        <Button title="Steel Blocks" onPress={() => navigation.navigate('SteelBlocksItem')} />
        <Button title="Wood Blocks" onPress={() => navigation.navigate('WoodBlocksItem')} />
        <Button title="Wooden Shingles Block" onPress={() => navigation.navigate('WoodenShinglesBlocksItem')} />
        <Button title="Hay Bale" onPress={() => navigation.navigate('HayBaleItem')} />
      </View>
    );
  }

export default BlockItemsScreen;