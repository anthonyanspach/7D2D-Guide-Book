{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StickofDynamiteItem({ navigation }) {
    return (
      <View>
        <Text>Stick of Dynamite Info</Text>

        <Text>Description:</Text>
        <Text>A Stick of Dynamite is a handheld Explosive weapon good for destroying blocks or attacking. A Stick of Dynamite works by lighting its fuse by right clicking and then throwing it to your desired location by left clicking. The throwing distance can be increased by holding the left click longer. The fuse lasts for 4 seconds so any Stick of Dynamites that are lit for more than 4 seconds but not thrown will result in death for the player. Stick of Dynamites have a blast radius of 6 blocks both horizontally and vertically. If thrown without lighting the fuse, the Stick of Dynamite will not explode and can be retrieved using the "E" key. When dropped without lighting the fuse, the fuse appears to be lit, but it does not burn down. The Stick of Dynamite is better for destroying blocks, while the Pipe Bomb is better for attacking enemies.</Text>

        <Text>Crafting:</Text>
        <Text>1 Plant Fibers</Text>
        <Text>20 Gun Powder</Text>
        <Text>2 Duct Tape</Text>
        <Text>10 Paper</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default StickofDynamiteItem;