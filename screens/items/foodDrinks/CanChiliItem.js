{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanChiliItem({ navigation }) {
    return (
      <View>
        <Text>Can of Chili Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Chili is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all canned foods, a Can of Chili has the advantage of being ready to be consumed immediately without the need to be cooked first. Eating a Can of Chili will have a positive effect on Fullness as well as on Health.</Text>

        <Text>Fullness: +15</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +7</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanChiliItem;
