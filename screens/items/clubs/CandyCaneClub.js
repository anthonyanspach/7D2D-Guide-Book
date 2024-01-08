{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CandyCaneClubItem({ navigation }) {
    return (
      <View>
        <Text>Candy Cane Club Info</Text>

        <Text>Description:</Text>
        <Text>The Candy Cane Club is a tier 1 Club - a one-handed melee weapon used to pummel your enemies. The Candy Cane Club cannot be crafted and is a seasonal item only being available during the month of December in the actual calendar year. You can find these clubs when looting during the month of December.</Text>

        <Text>Combat:</Text>
        <Text>During combat, the Candy Cane Club is a short range, one-handed melee weapon. Using the primary click (default left mouse button) will swing the Candy Cane Club, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage and increase its chance of causing a knockdown effect on an enemy.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default CandyCaneClubItem;