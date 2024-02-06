{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function ExplosivesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Explosives</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Explosives are covered under the perk Demolitions Expert. They offer a way to take out many enemies at the same time with grenades and other explosive throwables. They are, however, consumed in the process, forcing the player to craft more of them much like ammunition. Even though mines are unlocked by the Demolitions Expert perk, they don't benefit from it any other way.</Text>

        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('RocketLauncherItem')} >

          <Text style={[styles.buttonText]}>Rocket Launcher</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ExplodingArrowItem')} >

          <Text style={[styles.buttonText]}>Exploding Arrow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ExplodingCrossbowBoltItem')} >

          <Text style={[styles.buttonText]}>Exploding Crossbow Bolt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('RustyBarrelItem')} >

          <Text style={[styles.buttonText]}>Rusty Barrel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('TinLandMineItem')} >

          <Text style={[styles.buttonText]}>Tin Land Mine</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CookingPotMineItem')} >

          <Text style={[styles.buttonText]}>Cooking Pot Mine</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('HubCapMineItem')} >

          <Text style={[styles.buttonText]}>Hub Cap Mine</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('AirFilterLandMineItem')} >

          <Text style={[styles.buttonText]}>Air Filter Land Mine</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('TimedChargeItem')} >

          <Text style={[styles.buttonText]}>Timed Charge</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('MolotovCocktailItem')} >

          <Text style={[styles.buttonText]}>Molotov Cocktail</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('PipeBombItem')} >

          <Text style={[styles.buttonText]}>Pipe Bomb</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ContactGrenadeItem')} >

          <Text style={[styles.buttonText]}>Contact Grenade</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('GrenadeItem')} >

          <Text style={[styles.buttonText]}>Grenade</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('StickofDynamiteItem')} >

          <Text style={[styles.buttonText]}>Stick of Dynamite</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ExplosivesScreen;