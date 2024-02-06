{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function WeaponsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Weapons Categories</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Weapons are items whose primary function is to help the player to deal with zombies, animals and possibly with other players as well. Some weapons may have a secondary action.</Text>

        <Text style={[styles.text]}>Weapons can be divided into three main categories: melee, ranged and explosives. Every attribute has at least one melee and ranged weapon covered under them. A complete list of weapons can be found in List of weapons.</Text>

        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('ClubsScreen')} >

          <Text style={[styles.buttonText]}>Clubs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('SledgehammersScreen')} >

          <Text style={[styles.buttonText]}>Sledgehammers</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('SpearsScreen')} >

          <Text style={[styles.buttonText]}>Spears</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('KnucklesScreen')} >

          <Text style={[styles.buttonText]}>Knuckles</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('KnivesScreen')} >

          <Text style={[styles.buttonText]}>Knives</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('BatonsScreen')} >

          <Text style={[styles.buttonText]}>Batons</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('BowsScreen')} >

          <Text style={[styles.buttonText]}>Bows</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('HandgunsSMGScreen')} >

          <Text style={[styles.buttonText]}>Handguns & SMG</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('ShotgunsScreen')} >

          <Text style={[styles.buttonText]}>Shotguns</Text>


        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('MachineGunsScreen')} >

          <Text style={[styles.buttonText]}>Machine Guns</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('RiflesScreen')} >

          <Text style={[styles.buttonText]}>Rifles</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('RoboticTurretsScreen')} >

          <Text style={[styles.buttonText]}>Robotic Turrets</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.weaponButton]} onPress={() => navigation.navigate('ExplosivesScreen')} >

          <Text style={[styles.buttonText]}>Explosives</Text>

        </TouchableOpacity>

        <Text style={[styles.textHeader]}>Strength Weapons:</Text>
        <Text style={[styles.text]}>Clubs and bats are covered under the perk Pummel Pete. They offer a balance between attack speed and damage. Sledgehammers are covered under the perk Skull Crusher. They, on the other hand, deal the most melee damage of all weapons in a single hit, but trade the power to the very slow attack speed. One misplaced hit could cost the player their life.</Text>

        <Text style={[styles.text]}>Shotguns are covered under the perk Boomstick. They offer the player a good source of damage in close-quarter combat. However, shotguns' power falls off quite fast when the range between the player and the target increases.</Text>

        <Text style={[styles.text]}>Spears are covered under the perk Spear Master. They offer a longer range than other melee weapons. As of Alpha 21 spears can no longer be thrown.</Text>

        <Text style={[styles.text]}>Explosives are covered under the perk Demolitions Expert. They offer a way to take out many enemies at the same time with grenades and other explosive throwables. They are, however, consumed in the process, forcing the player to craft more of them much like ammunition. Even though mines are unlocked by the Demolitions Expert perk, they don't benefit from it any other way.</Text>

        <Text style={[styles.text]}>Rifles are covered under the perk Dead Eye. They offer the longest range a weapon has with a high damage per bullet. At the downside is the slow attack speed and small magazine capacity.</Text>


        <Text style={[styles.textHeader]}>Fortitude Weapons:</Text>
        <Text style={[styles.text]}>Knuckles are covered under the perk The Brawler. They have quite small range and damage per attack, but offer a fast attack speed and low stamina cost. They have a notable synergy with Beer, which temporarily gives them the highest damage output of any melee weapon.</Text>

        <Text style={[styles.text]}>Machine guns are covered under the perk Machine Gunner. They offer a balance between damage and fire rate while having the largest magazines.</Text>


        <Text style={[styles.textHeader]}>Agility Weapons:</Text>
        <Text style={[styles.text]}>Knives are covered under the perk Deep Cuts. They offer a lower range and damage per attack, but higher attack speed and debuffs such as bleeding that deal damage. Knives also have boosted damage when hitting zombies that are unaware of the player.</Text>

        <Text style={[styles.text]}>Bows and crossbows are covered under the perk Archery. They offer a quiet and efficient way to deal with zombies and other enemies. They need to reload after every shot and have a slow attack speed, which is counterbalanced by having an innate boost to stealth damage.</Text>

        <Text style={[styles.text]}>Handguns and the SMG are covered under the perk Gunslinger. Pistols offer a decent attack speed and magazine size with quite high damage. The SMG does the same but automatically.</Text>


        <Text style={[styles.textHeader]}>Intelligence Weapons:</Text>
        <Text style={[styles.text]}>Batons are covered under the perk Electrocutioner. While not offering too much damage, they make up for it with unique qualities. The Pipe Baton's regular attack causes zombies to stagger instantly and its power attack is an instant knockdown against all but the most tough zombies. It also attacks in an arc similar to the sledgehammer and can knock more than one zombie down. The Stun Baton goes further by electrocuting and shocking zombies, making them stunned for a while.</Text>

        <Text style={[styles.text]}>Robotic turrets are covered under the perk Robotics Inventor. They offer a unique portable weapons that can be used as a normal weapon or placed to attack on their own. Together with the stun baton they offer a solid DPS to enemies.</Text>
      </ScrollView>
    );
  }

export default WeaponsScreen;