{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanCatFoodItem({ navigation }) {
    return (
      <View>
        <Text>Can of Cat Food Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Cat Food is a Canned Food that can be scavenged from various houses and buildings across 7 Days to Die. As with all Canned Foods, a Can of Cat Food has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Cat Food will have a positive effect on Fullness as well as on Health. The only use for a Can of Cat food is as a source of Food.</Text>

        <Text>Fullness: +5</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +2</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanCatFoodItem;