{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanTunaItem({ navigation }) {
    return (
      <View>
        <Text>Can of Tuna Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Tuna is a Canned Food that can be scavenged from various houses and buildings across Navezgane and can also be purchased from vending machines. As with all canned foods, a Can of Tuna has the advantage of being ready to be consumed immediately without the need to be cooked first. Eating a Can of Tuna will have a positive effect on Fullness as well as on Health.</Text>

        <Text>Fullness: +5</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +2</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanTunaItem;