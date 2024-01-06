{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function BoneKnifeItem() {
    return (
      <View>
        <Text>Bone Knife info</Text>

        <Text>Description:</Text>
        <Text>A Bone Knife is a improvised Bladed Melee weapon which is easy to craft with Bones. Made by simply filing down one of the joints into a sharp blade. It is one of the few tools available which can harvest useful things like Leather, Bones, Animal Fat, and Raw Meat from dead or undead animals. -Sneaking attack increases 400% extra damage in A21.-</Text>

        <Text>Uses:</Text>
        <Text>During combat, the Bone Knife is a short range, one-handed melee weapon. Using the primary click (default left mouse button) will swing the Bone Knife, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage to its target.</Text>
        <Text>When harvesting a recently slain animal corpse, or bones, the Bone Knife acts as a Butcher Tool, allowing you to obtain resources from the corpse that you would not get when using a tool that is not a designated Butcher Tool.</Text>

        <Text>Crafting:</Text>
        <Text>5 Bones</Text>

        <Text>Unlock Options:</Text>
        <Text>Knife Guy</Text>
      </View>
    );
  }

export default BoneKnifeItem;