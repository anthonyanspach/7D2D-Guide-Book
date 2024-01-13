{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ExplosivesScreen({ navigation }) {
    return (
      <ScrollView>
        <Text>Explosives</Text>

        <Text>Description:</Text>
        <Text>Explosives are covered under the perk Demolitions Expert. They offer a way to take out many enemies at the same time with grenades and other explosive throwables. They are, however, consumed in the process, forcing the player to craft more of them much like ammunition. Even though mines are unlocked by the Demolitions Expert perk, they don't benefit from it any other way.</Text>

        <Button title="Rocket Launcher" onPress={() => navigation.navigate('RocketLauncherItem')} />
        <Button title="Exploding Arrow" onPress={() => navigation.navigate('ExplodingArrowItem')} />
        <Button title="Exploding Crossbow Bolt" onPress={() => navigation.navigate('ExplodingCrossbowBoltItem')} />
        <Button title="Rusty Barrel" onPress={() => navigation.navigate('RustyBarrelItem')} />
        <Button title="Tin Land Mine" onPress={() => navigation.navigate('TinLandMineItem')} />
        <Button title="Cooking Pot Mine" onPress={() => navigation.navigate('CookingPotMineItem')} />
        <Button title="Hub Cap Mine" onPress={() => navigation.navigate('HubCapMineItem')} />
        <Button title="Air Filter Land Mine" onPress={() => navigation.navigate('AirFilterLandMineItem')} />
        <Button title="Timed Charge" onPress={() => navigation.navigate('TimedChargeItem')} />
        <Button title="Molotov Cocktail" onPress={() => navigation.navigate('MolotovCocktailItem')} />
        <Button title="Pipe Bomb" onPress={() => navigation.navigate('PipeBombItem')} />
        <Button title="Contact Grenade" onPress={() => navigation.navigate('ContactGrenadeItem')} />
        <Button title="Grenade" onPress={() => navigation.navigate('GrenadeItem')} />
        <Button title="Stick of Dynamite" onPress={() => navigation.navigate('StickofDynamiteItem')} />
      </ScrollView>
    );
  }

export default ExplosivesScreen;