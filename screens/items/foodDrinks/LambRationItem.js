{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function LambRationItem({ navigation }) {
    return (
      <View>
        <Text>Lamb Ration Info</Text>

        <Text>Description:</Text>
        <Text>A Lamb Rations is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all canned foods, a Lamb Rations has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Lamb Rations will have a positive effect on Fullness as well as on Health.</Text>

        <Text>Fullness: +15</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +7</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default LambRationItem;