{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function EarofSuperCornItem({ navigation }) {
    return (
      <View>
        <Text>Ear of Super Corn Info</Text>

        <Text>Description:</Text>
        <Text>An Ear of Super Corn is a mutated form of corn genetically modified to be a superior food source. This can be first obtained from a Super Corn Plant found at a farm in a Navezgane map at 700N;300W</Text>
      </View>
    );
  }

export default EarofSuperCornItem;