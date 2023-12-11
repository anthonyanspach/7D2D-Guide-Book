{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ExplosivesScreen({ navigation }) {
    return (
      <View>
        <Text>Weapons Screen</Text>
        <Button title="Rocket Launcher" onPress={() => navigation.navigate('RocketLauncherItem')} />
        <Button title="Exploding Arrow" onPress={() => navigation.navigate('ExplodingArrowItem')} />
        <Button title="Exploding Crossbow Bolt" onPress={() => navigation.navigate('ExplodingCrossbowBoltItem')} />
        <Button title="Rusty Barrel" onPress={() => navigation.navigate('RustyBarrelItem')} />
        <Button title="Tin Land Mine" onPress={() => navigation.navigate('TinLandMineItem')} />
        <Button title="Cooking Pot Mine" onPress={() => navigation.navigate('CookingPotMineItem')} />
        <Button title="Hub Cap Mine" onPress={() => navigation.navigate('HubCapMineItem')} />
        <Button title="Air Filter Land Mine" onPress={() => navigation.navigate('AirFilterLandMineItem')} />
        <Button title="Timed Charge" onPress={() => navigation.navigate('TimedChargeItem')} />
        <Button title="Molotov Cocktail" onPress={() => navigation.navigate('MolotocCocktailItem')} />
        <Button title="Pipe Bomb" onPress={() => navigation.navigate('PipeBombItem')} />
        <Button title="Contact Grenade" onPress={() => navigation.navigate('ContactGrenageItem')} />
        <Button title="Grenade" onPress={() => navigation.navigate('GrenadaItem')} />
        <Button title="Stick of Dynamite" onPress={() => navigation.navigate('StickofDynamiteItem')} />
      </View>
    );
  }

export default ExplosivesScreen;