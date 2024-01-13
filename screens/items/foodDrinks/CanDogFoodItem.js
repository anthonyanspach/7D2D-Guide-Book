{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CanDogFoodItem({ navigation }) {
    return (
      <View>
        <Text>Can of Dog Food Info</Text>

        <Text>Description:</Text>
        <Text>A Can of Dog Food is a Canned Food that can be scavenged from various houses and buildings across Navezgane. As with all Canned Foods, a Can of Dog Food has the advantage of being ready to consume immediately without the need to be cooked first. Eating a Can of Dog Food will have a positive effect on Fullness as well as on Health.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +5</Text>
        <Text>Dysentery Chance: 0%</Text>
      </View>
    );
  }

export default CanDogFoodItem;